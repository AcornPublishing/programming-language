// ----------------------------------------------------------------------------
// Zoom Search Engine 4.0 (10/3/2005)
//
//  PLUS
//    tweaks by MCL
//


// Include required files for index data, settings, etc.
document.write("<script language=\"JavaScript\" src=\"../Resources/zoom_index.js\" charset=\"" + Charset + "\"><\/script>");
document.write("<script language=\"JavaScript\" src=\"../Resources/zoom_pages.js\" charset=\"" + Charset + "\"><\/script>");
document.write("<script language=\"JavaScript\" src=\"../Resources/zoom_titles.js\" charset=\"" + Charset + "\"><\/script>");
document.write("<script language=\"JavaScript\" src=\"../Resources/zoom_descriptions.js\" charset=\"" + Charset + "\"><\/script>");

document.write("<meta http-equiv=\"content-type\" content=\"text/html; charset=" + Charset + "\">");
if (document.charset)
	document.charset = Charset;	// IE4+ only

// ----------------------------------------------------------------------------
// Settings (change if necessary)
// ----------------------------------------------------------------------------

// The options available in the dropdown menu for number of results
// per page
var PerPageOptions = new Array(10, 20, 50, 100);

// Globals
var SkippedWords = 0;
var searchWords = new Array();
var SkippedOutputStr = "";

var months = new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');

// ----------------------------------------------------------------------------
// Helper Functions
// ----------------------------------------------------------------------------

// This function will return the value of a GET parameter
function getParam(paramName)
{
    paramStr = document.location.search;
    if (paramStr == "")
        return "";

    // remove '?' in front of paramStr
    if (paramStr.charAt(0) == "?")
        paramStr = paramStr.substring(1, paramStr.length);

    arg = (paramStr.split("&"));
    for (i=0; i < arg.length; i++) {
        arg_values = arg[i].split("=")
        if (unescape(arg_values[0]) == paramName) {
            if (UseUTF8 == 1 && self.decodeURIComponent) // check if decodeURIComponent() is defined
                ret = decodeURIComponent(arg_values[1]);
            else
                ret = unescape(arg_values[1]);  // IE 5.0 and older does not have decodeURI
            return ret;
        }
    }
    return "";
}

// Compares the two values, used for sorting output results
// Results that match all search terms are put first, highest score
function SortCompare (a, b)
{
    if (a[2] < b[2]) return 1;
    else if (a[2] > b[2]) return -1;
    else if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else return 0;
}

function SortByDate(a, b)
{
	if (datetime[a[0]] < datetime[b[0]]) return 1;
	else if (datetime[a[0]] > datetime[b[0]]) return -1;
	else return SortCompare(a, b);
}


function pattern2regexp(pattern)
{
    pattern = pattern.replace(/\#/g, "\\#");
    pattern = pattern.replace(/\$/g, "\\$");
    pattern = pattern.replace(/\./g, "\\.");
    pattern = pattern.replace(/\*/g, "[\\d\\S]*");
    pattern = pattern.replace(/\?/g, ".?");
    return pattern;
}

function HighlightDescription(line) {
    res = " " + line + " ";
    for (i = 0; i < numwords; i++) {
        if (searchWords[i] == "")
            continue;

        if (SearchAsSubstring == 1)
            res = res.replace(new RegExp("("+searchWords[i]+")", "gi"), "[;:]$1[:;]");
        else
            res = res.replace(new RegExp("(\\W|^|\\b)("+searchWords[i]+")(\\W|$|\\b)", "gi"), "$1[;:]$2[:;]$3");
    }
    // replace the marker text with the html text
    // this is to avoid finding previous <span>'ed text.
    res = res.replace(/\[;:\]/g, "<span class=\"highlight\">");
    res = res.replace(/\[:;\]/g, "</span>");
    return res;
}

function PrintNumResults(num)
{
    if (num == 0)
        return STR_NO_RESULTS;
    else if (num == 1)
        return num + " " + STR_RESULT;
    else
        return num + " " + STR_RESULTS;
}


function SkipSearchWord(sw) {
    if (searchWords[sw] != "") {
        if (SkippedWords > 0)
            SkippedOutputStr += ", ";
        SkippedOutputStr += "\"<b>" + searchWords[sw] + "</b>\"";
        searchWords[sw] = "";
    }
    SkippedWords++;
}


// ----------------------------------------------------------------------------
// Parameters initialisation (globals)
// ----------------------------------------------------------------------------

var query = getParam("zoom_query");
query = query.replace(/[\++]/g, " ");  // replace the '+' with spaces
query = query.replace(/[,+]/g, " ");
query = query.replace(/\</g, "&lt;");
query = query.replace(/[\"+]/g, " ");

var per_page = parseInt(getParam("zoom_per_page"));
if (isNaN(per_page)) per_page = 10;

var page = parseInt(getParam("zoom_page"));
if (isNaN(page)) page = 1;

var andq = parseInt(getParam("zoom_and"));
if (isNaN(andq))
{
	if (typeof(DefaultToAnd) != "undefined" && DefaultToAnd == 1)
		andq = 1;
	else
		andq = 0;
}

var cat = parseInt(getParam("zoom_cat"));
if (isNaN(cat)) cat = -1;   // search all categories

// for sorting options. zero is default (relevance)
// 1 is sort by date (if date/time is available)
var sort = parseInt(getParam("zoom_sort"));
if (isNaN(sort)) sort = 0;

var SelfURL = "";
if (typeof(LinkBackURL) == "undefined")
{
    SelfURL = document.location.href;
    var paramIndex = SelfURL.indexOf("?");
    if (paramIndex > -1)
        SelfURL = SelfURL.substr(0, paramIndex);    // strip off the parameters
}
else
    SelfURL = LinkBackURL;

/*
if (typeof(catnames) != "undefined" && typeof(catpages) != "undefined")
    UseCats = true;
else
    UseCats = false;
*/

var data = new Array();
var output = new Array();

target = "";
if (UseLinkTarget == 1)
    target = " target=\"" + LinkTarget + "\" ";



// ----------------------------------------------------------------------------
// Main search function starts here
// ----------------------------------------------------------------------------

function ZoomSearch() {

    if (Timing == 1) {
        timeStart = new Date();
    }

    // Display the form
    if (FormFormat > 0) {
        document.writeln("<form method=\"get\" action=\"" + SelfURL + "\" class=\"zoom_searchform\">");
        document.writeln("<input type=\"text\" name=\"zoom_query\" size=\"20\" value=\"" + query + "\" class=\"zoom_searchbox\" />");
        document.writeln("<input type=\"submit\" value=\"" + STR_FORM_SUBMIT_BUTTON + "\" class=\"zoom_button\" />");
        if (FormFormat == 2) {
            document.writeln("<span class=\"zoom_options\">" + STR_FORM_RESULTS_PER_PAGE + "\n");
            document.writeln("<select name='zoom_per_page'>");
            for (i = 0; i < PerPageOptions.length; i++) {
                document.write("<option");
                if (PerPageOptions[i] == per_page)
                    document.write(" selected=\"selected\"");
                document.writeln(">" + PerPageOptions[i] + "</option>");
            }
            document.writeln("</select><br /><br />");
            if (UseCats) {
                document.write(STR_FORM_CATEGORY + " ");
                document.write("<select name='zoom_cat'>");
                // 'all cats option
                document.write("<option value=\"-1\">" + STR_FORM_CATEGORY_ALL + "</option>");
                for (i = 0; i < catnames.length; i++) {
                    document.write("<option value=\"" + i + "\"");
                    if (i == cat)
                        document.write(" selected=\"selected\"");
                    document.writeln(">" + catnames[i] + "</option>");
                }
                document.writeln("</select>&nbsp;&nbsp;");
            }
            document.writeln(STR_FORM_MATCH + " ");
            if (andq == 0) {
                document.writeln("<input type=\"radio\" name=\"zoom_and\" value=\"0\" checked=\"checked\" />" + STR_FORM_ANY_SEARCH_WORDS);
                document.writeln("<input type=\"radio\" name=\"zoom_and\" value=\"1\" />" + STR_FORM_ALL_SEARCH_WORDS);                                
            } else {
                document.writeln("<input type=\"radio\" name=\"zoom_and\" value=\"0\" />" + STR_FORM_ANY_SEARCH_WORDS);
                document.writeln("<input type=\"radio\" name=\"zoom_and\" value=\"1\" checked=\"checked\" />" + STR_FORM_ALL_SEARCH_WORDS);                
            }
            document.writeln("<input type=\"hidden\" name=\"zoom_sort\" value=\"" + sort + "\" />");
            document.writeln("</span>");
        }
        else
        {
        	document.writeln("<input type=\"hidden\" name=\"zoom_per_page\" value=\"" + per_page + "\" />");
        	document.writeln("<input type=\"hidden\" name=\"zoom_and\" value=\"" + andq + "\" />");
        	document.writeln("<input type=\"hidden\" name=\"zoom_sort\" value=\"" + sort + "\" />");
        }
        
        document.writeln("</form>");
    }

    // give up early if no search words provided
    if (query.length == 0) {
        //document.writeln("No search query entered.<br />");        
        if (ZoomInfo == 1)
            document.writeln("<center><p><small>" + STR_POWEREDBY + " <a href=\"http://www.wrensoft.com/zoom/\" target=\"_blank\"><b>Zoom Search Engine</b></a></small></p></center>");
        return;
    }

    if (MapAccents == 1) {
        for (i = 0; i < NormalChars.length; i++) {
            query = query.replace(AccentChars[i], NormalChars[i]);
        }
    }


    if (ToLowerSearchWords == 1)
        query = query.toLowerCase();

    // prepare search query, strip quotes, trim whitespace
    if (WordJoinChars.indexOf(".") == -1)
        query = query.replace(/[\.+]/g, " ");

    if (WordJoinChars.indexOf("-") == -1)
        query = query.replace(/[\-+]/g, " ");

    if (WordJoinChars.indexOf("_") == -1)
        query = query.replace(/[\_+]/g, " ");

    if (WordJoinChars.indexOf("'") == -1)
        query = query.replace(/[\'+]/g, " ");

    if (WordJoinChars.indexOf("#") == -1)
        query = query.replace(/[\#+]/g, " ");

    if (WordJoinChars.indexOf("$") == -1)
        query = query.replace(/[\$+]/g, " ");

    //    if (WordJoinChars.indexOf(",") == -1)
    //      query = query.replace(/[\,+]/g, " ");

    // substitute multiple whitespace chars to single character
    query = query.replace(/[\/\s\\\\(\)\^\[\]\|\+\{\}]+/g, " ");    

    // trim trailing/leading whitespace
    query = query.replace(/^\s*|\s*$/g,""); 

    // split search phrase into words
    searchWords = query.split(" "); // split by spaces.

    document.write("<div class=\"searchheading\">" + STR_RESULTS_FOR + " \"" + query + "\"");
    if (UseCats) {
        if (cat == -1)
            document.writeln(" " + STR_RESULTS_IN_ALL_CATEGORIES);
        else
            document.writeln(" " + STR_RESULTS_IN_CATEGORY + " \"" + catnames[cat] + "\"");
    }
    document.writeln("</div><br />");

    document.writeln("<div class=\"results\">");

    numwords = searchWords.length;
    kw_ptr = 0;
    outputline = 0;
    usewildcards = 0;
    ipage = 0;
    matches = 0;
    var SWord;
    pagesCount = urls.length;

    // Initialise a result table the size of all pages
    res_table = new Array(pagesCount);
    for (i = 0; i < pagesCount; i++)
    {
        res_table[i] = new Array(3);
        res_table[i][0] = 0;
        res_table[i][1] = 0;
        res_table[i][2] = 0;
    }

    if (skipwords) {
        for (sw = 0; sw < numwords; sw++) {
            // check min length
            if (searchWords[sw].length < MinWordLen) {
                SkipSearchWord(sw);
                continue;
            }
            // check skip word list
            for (i = 0; i < skipwords.length; i++) {
                if (searchWords[sw] == skipwords[i]) {
                    SkipSearchWord(sw);
                    break;
                }
            }
        }
    }
    
    
    if (SkippedWords > 0)
        document.writeln("<i>" + STR_SKIPPED_FOLLOWING_WORDS + " " + SkippedOutputStr + ".</i><br /><br />");


    // Begin searching...
    for (sw = 0; sw < numwords; sw++) {

        if (searchWords[sw] == "")
            continue;

        if (searchWords[sw].indexOf("*") == -1 && searchWords[sw].indexOf("?") == -1) {
            UseWildCards = 0;
        } else {
            UseWildCards = 1;
            searchWords[sw] = pattern2regexp(searchWords[sw]);
            if (SearchAsSubstring == 0)
                pattern = "^" + searchWords[sw] + "$";
            else
                pattern = searchWords[sw];

            re = new RegExp(pattern, "g");
        }

        for (kw_ptr = 0; kw_ptr < dictwords.length; kw_ptr++) {

            data = dictwords[kw_ptr].split(",");

            if (UseWildCards == 0) {
                if (SearchAsSubstring == 0)
                    //match_result = data[0].search("^" + SWord + "$");
                    if (data[0] == searchWords[sw])
                        match_result = 0;
                    else
                        match_result = -1;
                else
                    match_result = data[0].indexOf(searchWords[sw]);
            } else
                match_result = data[0].search(re);


            if (match_result != -1) {
                // keyword found, include it in the output list

                for (kw = 1; kw < data.length; kw += 2) {
                    // check if page is already in output list
                    pageexists = 0;
                    ipage = data[kw];
                    if (res_table[ipage][0] == 0) {
                        matches++;
                        res_table[ipage][0] += parseInt(data[kw+1]);
                    }
                    else {

                        if (res_table[ipage][0] > 10000) {
                            // take it easy if its too big to prevent gigantic scores
                            res_table[ipage][0] += 1;
                        } else {
                            res_table[ipage][0] += parseInt(data[kw+1]); // add in score
                            res_table[ipage][0] *= 2;           // double score as we have two words matching
                        }
                    }
                    res_table[ipage][1] += 1;
                    // store the 'and' user search terms matched' value
                    if (res_table[ipage][2] == sw || res_table[ipage][2] == sw-SkippedWords)
                        res_table[ipage][2] += 1;

                }
                if (UseWildCards == 0 && SearchAsSubstring == 0)
                    break;    // this search word was found, so skip to next

            }
        }

    }

    // Count number of output lines that match ALL search terms
    oline = 0;
    fullmatches = 0;
    ResFiltered = false;
    output = new Array();
    var full_numwords = numwords - SkippedWords;
    for (i = 0; i < pagesCount; i++) {
        IsFiltered = false;
        if (res_table[i][0] != 0) {
            if (UseCats && cat != -1) {
                // using cats and not doing an "all cats" search
                if (catpages[i] != cat) {
                    IsFiltered = true;
                }
            }
            if (IsFiltered == false) {
                if (res_table[i][2] >= full_numwords) {
                    fullmatches++;
                } else {
                    if (andq == 1)
                        IsFiltered = true;
                }
            }
            if (IsFiltered == false) {
                // copy if not filtered out
                output[oline] = new Array(3);
                output[oline][0] = i;
                output[oline][1] = res_table[i][0];
                output[oline][2] = res_table[i][1];
                oline++;
            } else {
                ResFiltered = true;
            }
        }
    }
    if (ResFiltered == true)
        matches = output.length;

    // Sort results in order of score, use "SortCompare" function
    if (matches > 1)    
   	{
   		if (sort == 1 && UseDateTime == 1)
   			output.sort(SortByDate);	// sort by date
   		else
        	output.sort(SortCompare);	// sort by relevance
    }
    
    // prepare query_out
    var query_out = query.replace(/\s/g, "+");
    query_out = escape(query_out);    

    //Display search result information
    document.writeln("<div class=\"summary\">");
    if (matches == 0)
        document.writeln(STR_SUMMARY_NO_RESULTS_FOUND + "<br />");
    else if (numwords > 1 && andq == 0) {
        //OR
        SomeTermMatches = matches - fullmatches;
        document.writeln(PrintNumResults(fullmatches) + " " + STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS + " ");
        if (SomeTermMatches > 0)
            document.writeln(PrintNumResults(SomeTermMatches) + " " + STR_SUMMARY_FOUND_CONTAINING_SOME_TERMS);
        document.writeln("<br />");
    }
    else if (numwords > 1 && andq == 1) //AND
        document.writeln(PrintNumResults(fullmatches) + " " + STR_SUMMARY_FOUND_CONTAINING_ALL_TERMS + "<br />");
    else
        document.writeln(PrintNumResults(matches) + " " + STR_SUMMARY_FOUND + "<br />");

    document.writeln("</div>\n");

    // number of pages of results
    num_pages = Math.ceil(matches / per_page);
    if (num_pages > 1)
        document.writeln("<br />" + num_pages + " " + STR_PAGES_OF_RESULTS + "<br />\n");
        
    // Show sorting options
    if (matches > 1)
    {
    	if (UseDateTime == 1)
    	{
    		document.writeln("<div class=\"sorting\">");
    		if (sort == 1)
				document.writeln("<a href=\"" + SelfURL + "?zoom_query=" + query_out + "&amp;zoom_page=" + page + "&amp;zoom_per_page=" + per_page + "&amp;zoom_cat=" + cat + "&amp;zoom_and=" + andq + "&amp;zoom_sort=0\">" + STR_SORTBY_RELEVANCE + "</a> / <b>" + STR_SORTEDBY_DATE + "</b>");
			else
				document.writeln("<b>" + STR_SORTEDBY_RELEVANCE + "</b> / <a href=\"" + SelfURL + "?zoom_query=" + query_out + "&amp;zoom_page=" + page + "&amp;zoom_per_page=" + per_page + "&amp;zoom_cat=" + cat + "&amp;zoom_and=" + andq + "&amp;zoom_sort=1\">" + STR_SORTBY_DATE + "</a>");
			document.writeln("</div>");
    	}    	
    }    

    // determine current line of result from the output array
    if (page == 1) {
        arrayline = 0;
    } else {
        arrayline = ((page - 1) * per_page);
    }

    // the last result to show on this page
    result_limit = arrayline + per_page;

    // display the results
    while (arrayline < matches && arrayline < result_limit) {
        ipage = output[arrayline][0];
        score = output[arrayline][1];
        
        document.writeln("<p></p>\n");
        
        document.writeln("<div class=\"result_title\">");
        if (DisplayNumber == 1)
        	document.writeln("<b>" + (arrayline+1) + ".</b>&nbsp;");
        	
        if (DisplayTitle == 1)
        {
	    	if (GotoHighlight == 1)				
	    	{
	    		if (SearchAsSubstring == 1)
	    			document.writeln("<a href=\"" + urls[ipage] + "?zoom_highlightsub=" + query_out + "\"" + target + ">" + titles[ipage] + "</a>");
	    		else
					document.writeln("<a href=\"" + urls[ipage] + "?zoom_highlight=" + query_out + "\"" + target + ">" + titles[ipage] + "</a>");
			}			
    		else
			{
				document.writeln( generate_title_text( ipage ) );
			}
        }        
        else
        	document.writeln("<a href=\"" + urls[ipage] + "\"" + target + ">" + urls[ipage] + "</a>");
                   
        if (UseCats) {
        	catindex = catpages[ipage];
            document.writeln("<span class=\"category\">[" + catnames[catindex] + "]</span>");
        }
        document.writeln("</div>");
        
        if (DisplayMetaDesc == 1)
        {
            document.writeln("<div class=\"description\">");
            if (Highlighting == 1)
                document.writeln(HighlightDescription( generate_description_text(ipage) ));
            else
                document.writeln( generate_description_text(ipage) );
            // document.writeln("<b>...</b></div>\n");
            document.writeln("</div>\n");
        }
        
        info_str = "";
        
        if (DisplayTerms == 1)
        	info_str += STR_RESULT_TERMS_MATCHED + " " + output[arrayline][2];
        	
        if (DisplayScore == 1) {
        	if (info_str.length > 0)
        		info_str += "&nbsp; - &nbsp;";
        	info_str += STR_RESULT_SCORE + " " + score;
        }
        
        if (DisplayDate == 1) {
        	if (info_str.length > 0)
        		info_str += "&nbsp; - &nbsp;";
        	info_str += datetime[ipage].getDate() + " " + months[datetime[ipage].getMonth()] + " " + datetime[ipage].getFullYear();
        }
             
        if (DisplayURL == 1) {
        	if (info_str.length > 0)
        		info_str += "&nbsp; - &nbsp;";
            if ( urls[ipage] == "$" ) {
				info_str += "See book";
            } else {
			info_str += STR_RESULT_URL + " " + urls[ipage];
            }
        }
                   
        document.writeln("<div class=\"infoline\">");
        document.writeln(info_str);                        
        document.writeln("</div>\n");
        arrayline++;
    }

    // Show links to other result pages
    if (num_pages > 1) {
        // 10 results to the left of the current page
        start_range = page - 10;
        if (start_range < 1)
            start_range = 1;

        // 10 to the right
        end_range = page + 10;
        if (end_range > num_pages)
            end_range = num_pages;

        document.writeln("<p></p>" + STR_RESULT_PAGES + " ");
        if (page > 1)
            document.writeln("<a href=\"" + SelfURL + "?zoom_query=" + query_out + "&amp;zoom_page=" + (page-1) + "&amp;zoom_per_page=" + per_page + "&amp;zoom_cat=" + cat + "&amp;zoom_and=" + andq + "&amp;zoom_sort=" + sort + "\">&lt;&lt; " + STR_RESULT_PAGES_PREVIOUS + "</a> ");

        for (i = start_range; i <= end_range; i++) {
            if (i == page) {
                document.writeln(page + " ");
            } else {
                document.writeln("<a href=\"" + SelfURL + "?zoom_query=" + query_out + "&amp;zoom_page=" + i + "&amp;zoom_per_page=" + per_page + "&amp;zoom_cat=" + cat + "&amp;zoom_and=" + andq + "&amp;zoom_sort=" + sort + "\">" + i + "</a> ");
            }
        }

        if (page != num_pages)
            document.writeln("<a href=\"" + SelfURL + "?zoom_query=" + query_out + "&amp;zoom_page=" + (page+1) + "&amp;zoom_per_page=" + per_page + "&amp;zoom_cat=" + cat + "&amp;zoom_and=" + andq + "&amp;zoom_sort=" + sort + "\">" + STR_RESULT_PAGES_NEXT + " &gt;&gt;</a> ");
    }

    document.writeln("</div>"); // end results style tag

    if (Timing == 1) {
        timeEnd = new Date();
        timeDifference = timeEnd - timeStart;
        document.writeln("<br /><br /><small>" + STR_SEARCH_TOOK + " " + (timeDifference/1000) + " " + STR_SECONDS + ".</small>\n");
    }

    if (ZoomInfo == 1)
        document.writeln("<center><p><small>" + STR_POWEREDBY + " <a href=\"http://www.wrensoft.com/zoom/\" target=\"_blank\"><b>Zoom Search Engine</b></a></small></p></center>");
}


function generate_title_text( ipage ) {

	// Does the title (=filename for PDFs) of the page start with "PLP_"?
	//  If so the result is a book page ....
	if ( titles[ipage].indexOf("PLP_")==0 )
	{
		// For book pages we give the page number; assume this embedded in the
		//  title between "PLP_" and ".pdf"
		page_number = titles[ipage].substring(4,titles[ipage].indexOf(".pdf"))
		return "Main text, page "+page_number;
	}
	else
	{
		// Does the title of the page start with "SCOTTCD"?
		//  If so, it is CD content so use our lookup table to map the title (=filename)
		//  to a string such as "CD, pages xx-CD to yy-CD"
		if ( titles[ipage].indexOf("SCOTTCD")==0 ) {
			if ( cdcontent_title_lookup[ titles[ipage] ] != "" ) {
				file_name_for_display = cdcontent_title_lookup[ titles[ipage] ];
			} else {
				file_name_for_display = titles[ipage];
			}
		}
		else
		{
			// The fallback is to use the title entry generated by Zoom ...
			//  this will be good for HTML pages on the CD, but perhaps not good for
			//  other things (such as the BookIndex.pdf).
			file_name_for_display = titles[ipage]
		}
		// For non-book results, we link to the object on the CD ....
		return "<a href=\"" + urls[ipage] + "\"" + target + ">" + file_name_for_display + "</a>";
	}

}


var cdcontent_title_lookup = {
  'SCOTTCD0201.pdf' : 'CD, pages 1-CD to 12-CD',
  'SCOTTCD0202.pdf'	: 'CD, pages 13-CD to 20-CD',
  'SCOTTCD02R.pdf'  : 'CD, page 21-CD',
  'SCOTTCD02P.pdf'  : 'CD, page 22-CD',
  'SCOTTCD0301.pdf'	: 'CD, pages 23-CD to 29-CD',
  'SCOTTCD0302.pdf'	: 'CD, pages 30-CD to 35-CD',
  'SCOTTCD03R.pdf'  : 'CD, pages 36-CD to 37-CD',
  'SCOTTCD03P.pdf'  : 'CD, page 38-CD',
  'SCOTTCD0401.pdf' : 'CD, pages 39-CD to 50-CD',
  'SCOTTCD04R.pdf'  : 'CD, pages 51-CD to 52-CD',
  'SCOTTCD04P.pdf'  : 'CD, page 53-CD',
  'SCOTTCD0501.pdf'	: 'CD, pages 54-CD to 58-CD',
  'SCOTTCD0502.pdf' : 'CD, pages 59-CD to 65-CD',
  'SCOTTCD05R.pdf'  : 'CD, pages 66-CD to 67-CD',
  'SCOTTCD05P.pdf'  : 'CD, page 68-CD',
  'SCOTTCD0601.pdf' : 'CD, pages 69-CD to 71-CD',
  'SCOTTCD0602.pdf' : 'CD, pages 72-CD to 77-CD',
  'SCOTTCD06R.pdf'  : 'CD, pages 78-CD to 79-CD',
  'SCOTTCD06P.pdf'  : 'CD, page 80-CD',
  'SCOTTCD0701.pdf' : 'CD, pages 81-CD to 89-CD',
  'SCOTTCD0702.pdf' : 'CD, pages 90-CD to 92-CD',
  'SCOTTCD0703.pdf' : 'CD, pages 93-CD to 104-CD',
  'SCOTTCD07R.pdf'  : 'CD, page 105-CD',
  'SCOTTCD07P.pdf'  : 'CD, page 106-CD',
  'SCOTTCD0801.pdf' : 'CD, pages 107-CD to 110-CD',
  'SCOTTCD0802.pdf' : 'CD, pages 111-CD to 118-CD',
  'SCOTTCD0803.pdf' : 'CD, pages 119-CD to 121-CD',
  'SCOTTCD0804.pdf' : 'CD, pages 122-CD to 124-CD',
  'SCOTTCD0805.pdf' : 'CD, pages 125-CD to 134-CD',
  'SCOTTCD0806.pdf' : 'CD, pages 135-CD to 138-CD',
  'SCOTTCD0807.pdf' : 'CD, pages 139-CD to 142-CD',
  'SCOTTCD08R.pdf'  : 'CD, pages 143-CD to 144-CD',
  'SCOTTCD08P.pdf'  : 'CD, page 145-CD',
  'SCOTTCD0901.pdf' : 'CD, pages 146-CD to 157-CD',
  'SCOTTCD0902.pdf' : 'CD, pages 158-CD to 161-CD',
  'SCOTTCD09R.pdf'  : 'CD, pages 162-CD to 164-CD',
  'SCOTTCD09P.pdf'  : 'CD, page 165-CD',
  'SCOTTCD1001.pdf' : 'CD, pages 166-CD to 176-CD',
  'SCOTTCD10R.pdf'  : 'CD, pages 177-CD to 178-CD',
  'SCOTTCD10P.pdf'  : 'CD, page 179-CD',
  'SCOTTCD1101.pdf' : 'CD, pages 180-CD to 185-CD',
  'SCOTTCD11R.pdf'  : 'CD, pages 186-CD to 187-CD',
  'SCOTTCD11P.pdf'  : 'CD, page 188-CD',
  'SCOTTCD1401.pdf' : 'CD, pages 189-CD to 194-CD',
  'SCOTTCD1402.pdf' : 'CD, pages 195-CD to 199-CD',
  'SCOTTCD14R.pdf'  : 'CD, page 200-CD',
  'SCOTTCD14P.pdf'  : 'CD, page 201-CD',
  'SCOTTCD1501.pdf' : 'CD, pages 202-CD to 259-CD'
};



// Allows description text to be tailored with "Section", "Chapter", or "Appendix" as appropriate.
function generate_description_text( ipage ) {

	if ( titles[ipage].indexOf("PLP_")==0 
	     || titles[ipage].indexOf("SCOTTCD")==0 )
	{
		period_ind = descriptions[ipage].indexOf(".");
		colon_ind = descriptions[ipage].indexOf(":");
		if ( colon_ind > 0 ) {
			if ( period_ind > 0  &&  period_ind < colon_ind ) {
				return "Section "+descriptions[ipage];
			} else {
				if ( descriptions[ipage].charAt(0) == 'A' ) {
					return "Appendix "+descriptions[ipage];
				} else {
					return "Chapter "+descriptions[ipage];
				}
			}
		} else {
			return descriptions[ipage];
		}
	}
	else
	{
		return descriptions[ipage];
	}

}



