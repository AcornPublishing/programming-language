var BOOK_MENU_STYLE={
	'target'  : '_self',	// name of the frame links will be opened in
							// other possible values are: _blank, _parent, _search, _self and _top

	'icon_e'  : '../Resources/icons/empty.gif', // empty image
	'icon_l'  : '../Resources/icons/line.gif',  // vertical line
	
	'icon_48' : '../Resources/icons/book_closed.gif', // root icon normal
	'icon_52' : '../Resources/icons/book_closed.gif', // root icon selected
	'icon_56' : '../Resources/icons/book_open.gif',   // root icon opened
	'icon_60' : '../Resources/icons/book_open.gif',   // root icon opened selected
	
	'icon_16' : '../Resources/icons/folder.gif',     // node icon normal
	'icon_20' : '../Resources/icons/folder.gif',     // node icon selected
	'icon_24' : '../Resources/icons/folderopen.gif', // node icon opened
	'icon_28' : '../Resources/icons/folderopen.gif', // node icon selected opened

	'icon_0'  : '../Resources/icons/book_page.gif', // leaf icon normal
	'icon_4'  : '../Resources/icons/book_page.gif', // leaf icon selected
	'icon_8'  : '../Resources/icons/book_page.gif', // leaf icon opened
	'icon_12' : '../Resources/icons/book_page.gif', // leaf icon opened selected
	
	'icon_2'  : '../Resources/icons/join_bottom.gif', // junction for leaf
	'icon_3'  : '../Resources/icons/join.gif',        // junction for last leaf
	'icon_18' : '../Resources/icons/plus_bottom.gif', // junction for closed node
	'icon_19' : '../Resources/icons/plus.gif',        // junctioin for last closed node
	'icon_26' : '../Resources/icons/minus_bottom.gif',// junction for opened node
	'icon_27' : '../Resources/icons/minus.gif',       // junctioin for last opended node

	// styles - root
	'style_48':'menuRootNotLinked', // normal root caption style
	'style_52':'menuRootNotLinked', // selected root catption style
	'style_56':'menuRootNotLinked', // opened root catption style
	'style_60':'menuRootNotLinked', // selected opened root catption style
	'style_112':'menuRootNotLinked', // mouseovered normal root caption style
	'style_116':'menuRootNotLinked', // mouseovered selected root catption style
	'style_120':'menuRootNotLinked', // mouseovered opened root catption style
	'style_124':'menuRootNotLinked', // mouseovered selected opened root catption style
	
	// styles - node
	'style_16':'menuNodeNotLinked', // normal node caption style
	'style_20':'menuNodeNotLinked', // selected node catption style
	'style_24':'menuNodeNotLinked', // opened node catption style
	'style_28':'menuNodeNotLinked', // selected opened node catption style
	'style_80':'menuNodeNotLinked', // mouseovered normal node caption style
	'style_84':'menuNodeNotLinked', // mouseovered selected node catption style
	'style_88':'menuNodeNotLinked', // mouseovered opened node catption style
	'style_92':'menuNodeNotLinked', // mouseovered selected opened node catption style

	// styles - leaf
	'style_0':'menuLeafLinked',
	'style_4':'menuLeafLinked',
	'style_8':'menuLeafLinked',
	'style_12':'menuLeafLinked',
	'style_64':'menuLeafLinkedRollover',
	'style_68':'menuLeafLinkedRollover',
	'style_72':'menuLeafLinkedRollover',
	'style_76':'menuLeafLinkedRollover',

	'onItemOpen' : 'onItemOpenCloseHandler',
	'onItemClose' : 'onItemOpenCloseHandler'
}


function onItemOpenCloseHandler (o_item) {
	o_item.save();
	return true;
}

var BOOK_MENU_ITEMS=[
 [ 'Chapter 2&nbsp;&nbsp;���α׷��� ��� ����',null,{},
    [ '2.3.4 ���� ����&nbsp;&nbsp;&nbsp;[1-CD ~ 13-CD]','CDSections/SCOTTCD0201.pdf' ],
    [ '2.4 �̷��� ���� ����&nbsp;&nbsp;&nbsp;[14-CD ~ 22-CD]','CDSections/SCOTTCD0202.pdf' ],
    [ '���������� Ž������',null,{},
      [ '2.6 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD02R.pdf' ],
      [ '2.7 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD02P.pdf' ],
    ]
 ],
 [ 'Chapter 3&nbsp;&nbsp;�̸�, ��ȿ ����, ���ε�',null,{},
    [ '3.4 ��ȿ ������ ����&nbsp;&nbsp;&nbsp;[23-CD ~ 29-CD]','CDSections/SCOTTCD0301.pdf' ],
    [ '3.7 �и� ������&nbsp;&nbsp;&nbsp;[30-CD ~ 36-CD]','CDSections/SCOTTCD0302.pdf' ],
    [ '���������� Ž������',null,{},
      [ '3.9 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD03R.pdf' ],
      [ '3.10 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD03P.pdf' ]
    ]
 ],
 [ 'Chapter 4&nbsp;&nbsp;Semantic Analysis',null,{},
    [ '4.5 �ǹ� �м�&nbsp;&nbsp;&nbsp;[37-CD ~ 48-CD]','CDSections/SCOTTCD0401.pdf' ],
    [ '���������� Ž������ ',null,{},
      [ '4.8 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD04R.pdf' ],
      [ '4.9 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD04P.pdf' ]
    ]
 ],
 [ 'Chapter 5&nbsp;&nbsp;Ÿ�� �ӽ��� ����',null,{},
    [ '5.2.1 ��ǻ�� ���&nbsp;&nbsp;&nbsp;[49-CD ~ 54-CD]','CDSections/SCOTTCD0501.pdf' ],
    [ '5.4.4 ������ �� ���� ��: x86�� MIPS&nbsp;&nbsp;&nbsp;[55-CD ~ 61-CD]','CDSections/SCOTTCD0502.pdf' ],
    [ '���������� Ž������',null,{},
      [ '5.7 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD05R.pdf' ],
      [ '5.8 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD05P.pdf' ]
    ]
 ],
 [ 'Chapter 6&nbsp;&nbsp;���� �帧',null,{},
    [ '6.5.4 �������� ������&nbsp;&nbsp;&nbsp;[62-CD ~ 64-CD]','CDSections/SCOTTCD0601.pdf' ],
    [ '6.7 �������&nbsp;&nbsp;&nbsp;[65-CD ~ 70-CD]','CDSections/SCOTTCD0602.pdf' ],
    [ '���������� Ž������',null,{},
      [ '6.9 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD06R.pdf' ],
      [ '6.10 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD06P.pdf' ]
    ]
 ],
 [ 'Chapter 7&nbsp;&nbsp;�ڷ� ����',null,{},
    [ '7.2.4 ML�� ���� �ý���&nbsp;&nbsp;&nbsp;[71-CD ~ 80-CD]','CDSections/SCOTTCD0701.pdf' ],
    [ '7.3.3 With��&nbsp;&nbsp;&nbsp;[81-CD ~ 84-CD]','CDSections/SCOTTCD0702.pdf' ],
    [ '7.9 ���ϰ� �Է�/���&nbsp;&nbsp;&nbsp;[85-CD ~ 96-CD]','CDSections/SCOTTCD0703.pdf' ],
    [ '���������� Ž������',null,{},
      [ '7.12 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD07R.pdf' ],
      [ '7.13 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD07P.pdf' ]
    ]
 ],
 [ 'Chapter 8&nbsp;&nbsp;�����ƾ�� ���� �߻�ȭ',null,{},
    [ '8.2.1 ���÷���&nbsp;&nbsp;&nbsp;[97-CD ~ 100-CD]','CDSections/SCOTTCD0801.pdf' ],
    [ '8.2.2 ��� ����: MIPS���� C�� x86���� �Ľ�Į&nbsp;&nbsp;&nbsp;[101-CD ~ 108-CD]','CDSections/SCOTTCD0802.pdf' ],
    [ '8.2.3 �������� ������&nbsp;&nbsp;&nbsp;[109-CD ~ 111-CD]','CDSections/SCOTTCD0803.pdf' ],
    [ '8.3.2 �̸��� ���� ȣ��&nbsp;&nbsp;&nbsp;[112-CD ~ 114-CD]','CDSections/SCOTTCD0804.pdf' ],
    [ '8.4.4 C++, �ڹٿ� C#������ ���׸�&nbsp;&nbsp;&nbsp;[115-CD ~ 125-CD]','CDSections/SCOTTCD0805.pdf' ],
    [ '8.6.3 �ݺ����� ����&nbsp;&nbsp;&nbsp;[126-CD ~ 130-CD]','CDSections/SCOTTCD0806.pdf' ],
    [ '8.6.4 �и��� �̺�Ʈ �ùķ��Ƽ�;&nbsp;&nbsp;[131-CD ~ 134-CD]','CDSections/SCOTTCD0807.pdf' ],
    [ '���������� Ž������',null,{},
      [ '8.8 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD08R.pdf' ],
      [ '8.9 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD08P.pdf' ]
    ]
 ],
 [ 'Chapter 9&nbsp;&nbsp;�ڷ� �߻�ȭ�� ��ü����',null,{},
    [ '9.5 ���� ���&nbsp;&nbsp;&nbsp;[135-CD ~ 147-CD]','CDSections/SCOTTCD0901.pdf' ],
    [ '9.6.1 ������ũ�� ��ü ��&nbsp;&nbsp;&nbsp;[148-CD ~ 151-CD]','CDSections/SCOTTCD0902.pdf' ],
    [ '���������� Ž������',null,{},
      [ '9.8 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD09R.pdf' ],
      [ '9.9 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD09P.pdf' ]
    ]
 ],
 [ 'Chapter 10&nbsp;&nbsp;�Լ��� ���',null,{},
    [ '10.6 �̷��� ����&nbsp;&nbsp;&nbsp;[152-CD ~ 162-CD]','CDSections/SCOTTCD1001.pdf' ],
    [ '���������� Ž������',null,{},
      [ '10.9 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD10R.pdf' ],
      [ '10.10 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD10P.pdf' ]
    ]
 ],
 [ 'Chapter 11&nbsp;&nbsp;���� ���',null,{},
    [ '11.3 �̷��� ����&nbsp;&nbsp;&nbsp;[163-CD ~ 168-CD]','CDSections/SCOTTCD1101.pdf' ],
    [ '���������� Ž������',null,{},
      [ '11.6 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD11R.pdf' ],
      [ '11.7 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD11P.pdf' ]
    ]
 ],
 [ 'Chapter 14&nbsp;&nbsp;���� ������ ���α׷� �ۼ�',null,{},
    [ '14.2 �߰� ����&nbsp;&nbsp;&nbsp;[169-CD ~ 174-CD]','CDSections/SCOTTCD1401.pdf' ],
    [ '14.7 ���� ��ŷ&nbsp;&nbsp;&nbsp;[175-CD ~ 179-CD]','CDSections/SCOTTCD1402.pdf' ],
    [ '���������� Ž������',null,{},
      [ '14.9 ��ȭ ��������&nbsp;&nbsp;&nbsp;','CDExercises/SCOTTCD14R.pdf' ],
      [ '14.10 ��ȭ Ž������&nbsp;&nbsp;&nbsp;','CDExplorations/SCOTTCD14P.pdf' ]
    ]
 ],

 [ 'Chapter 15&nbsp;&nbsp;�ڵ� ����&nbsp;&nbsp;&nbsp;[180-CD ~ 242-CD]','CDSections/SCOTTCD1501.pdf#page=1',
   {'s0':'menuRootLinked','s4':'menuRootLinked','s8':'menuRootLinked','s12':'menuRootLinked','s64':'menuRootLinkedRollover','s68':'menuRootLinkedRollover','s72':'menuRootLinkedRollover','s76':'menuRootLinkedRollover'},
    [ '15.1 �ڵ� ������ ���� �ܰ�&nbsp;&nbsp;&nbsp;[182-CD ~ 183-CD]','CDSections/SCOTTCD1501.pdf#page=3' ],
    [ '15.2 ������ ����ȭ&nbsp;&nbsp;&nbsp;[184-CD ~ 187-CD]','CDSections/SCOTTCD1501.pdf#page=5' ],
    [ '15.3 �⺻ ��Ͽ����� �ߺ� ����&nbsp;&nbsp;&nbsp;[187-CD ~ 196-CD]','CDSections/SCOTTCD1501.pdf#page=8' ],
    [ '15.4 ���� �ߺ��� �ڷ� �帧 �м�&nbsp;&nbsp;&nbsp;[196-CD ~ 207-CD]','CDSections/SCOTTCD1501.pdf#page=17' ],
    [ '15.5 ���� ���� I&nbsp;&nbsp;&nbsp;[207-CD ~ 212-CD]','CDSections/SCOTTCD1501.pdf#page=28' ],
    [ '15.6 ��ɾ� �����ٸ�&nbsp;&nbsp;&nbsp;[212-CD ~ 216-CD]','CDSections/SCOTTCD1501.pdf#page=33' ],
    [ '15.7 ���� ���� II&nbsp;&nbsp;&nbsp;[216-CD ~ 228-CD]','CDSections/SCOTTCD1501.pdf#page=37' ],
    [ '15.8 �������� �Ҵ�&nbsp;&nbsp;&nbsp;[228-CD ~ 232-CD]','CDSections/SCOTTCD1501.pdf#page=49' ],
    [ '15.9 ����&nbsp;&nbsp;&nbsp;[233-CD ~ 234-CD]','CDSections/SCOTTCD1501.pdf#page=54' ],
    [ '���������� Ž������',null,{},
      [ '15.10 ��ȭ ��������;&nbsp;&nbsp;[234-CD ~ 239-CD]','CDSections/SCOTTCD1501.pdf#page=55' ],
      [ '15.11 ��ȭ Ž������&nbsp;&nbsp;&nbsp;[239-CD ~ 241-CD]','CDSections/SCOTTCD1501.pdf#page=60' ]
    ],
    [ '15.12 �����ڷ�&nbsp;&nbsp;&nbsp;[241-CD ~ 242-CD]','CDSections/SCOTTCD1501.pdf#page=62' ],
 ]
];
