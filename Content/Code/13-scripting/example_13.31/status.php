

<HTML>
<HEAD>
<TITLE>Status of <?php echo $host = chop(`hostname`) ?></TITLE>
</HEAD>
<BODY>
<H1><?php echo $host ?></H1>
<PRE>
<?php echo `uptime`, "\n", `who` ?>
</PRE>
</BODY>
</HTML>
