var CODE_MENU_STYLE={
	'target'  : '_self',	// name of the frame links will be opened in
							// other possible values are: _blank, _parent, _search, _self and _top

	'icon_e'  : '../../Resources/icons/empty.gif', // empty image
	'icon_l'  : '../../Resources/icons/line.gif',  // vertical line
	
	'icon_48' : '../../Resources/icons/book_closed.gif', // root icon normal
	'icon_52' : '../../Resources/icons/book_closed.gif', // root icon selected
	'icon_56' : '../../Resources/icons/book_open.gif',   // root icon opened
	'icon_60' : '../../Resources/icons/book_open.gif',   // root icon opened selected
	
	'icon_16' : '../../Resources/icons/folder.gif',     // node icon normal
	'icon_20' : '../../Resources/icons/folder.gif',     // node icon selected
	'icon_24' : '../../Resources/icons/folderopen.gif', // node icon opened
	'icon_28' : '../../Resources/icons/folderopen.gif', // node icon selected opened

	'icon_0'  : '../../Resources/icons/folder.gif', // leaf icon normal
	'icon_4'  : '../../Resources/icons/folder.gif', // leaf icon selected
	'icon_8'  : '../../Resources/icons/folder.gif', // leaf icon opened
	'icon_12' : '../../Resources/icons/folder.gif', // leaf icon opened selected
	
	'icon_2'  : '../../Resources/icons/join_bottom.gif', // junction for leaf
	'icon_3'  : '../../Resources/icons/join.gif',        // junction for last leaf
	'icon_18' : '../../Resources/icons/plus_bottom.gif', // junction for closed node
	'icon_19' : '../../Resources/icons/plus.gif',        // junctioin for last closed node
	'icon_26' : '../../Resources/icons/minus_bottom.gif',// junction for opened node
	'icon_27' : '../../Resources/icons/minus.gif',       // junctioin for last opended node

	// styles - root
	'style_48':'menu2RootLinked', // normal root caption style
	'style_52':'menu2RootLinked', // selected root catption style
	'style_56':'menu2RootLinked', // opened root catption style
	'style_60':'menu2RootLinked', // selected opened root catption style
	'style_112':'menu2RootLinked', // mouseovered normal root caption style
	'style_116':'menu2RootLinked', // mouseovered selected root catption style
	'style_120':'menu2RootLinked', // mouseovered opened root catption style
	'style_124':'menu2RootLinked', // mouseovered selected opened root caption style
	
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

var CODE_MENU_ITEMS=[
 [ 'Chapter 1&nbsp;&nbsp;�Ұ�',null,{},
  [ '�� 1.17' , '01-intro/example_1.17' ],
  [ '�� 1.3' , '01-intro/exercise_1.3' ]
 ],
 [ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapter 2&nbsp;&nbsp;���α׷��� ��� ����',null,
   {'s0':'menu2RootNotLinked','s4':'menu2RootNotLinked','s8':'menu2RootNotLinked','s12':'menu2RootNotLinked',
    's64':'menu2RootNotLinked','s68':'menu2RootNotLinked','s72':'menu2RootNotLinked','s76':'menu2RootNotLinked'}
 ],
 [ 'Chapter 3&nbsp;&nbsp;�̸�, ��ȿ ����, ���ε�',null,{},
  [ '�� 3.6' , '03-naming/example_3.6' ],
  [ '�� 3.7' , '03-naming/example_3.7' ],
  [ '�� 3.9' , '03-naming/example_3.9' ],
  [ '�� 3.10' , '03-naming/example_3.10' ],
  [ '�� 3.11' , '03-naming/example_3.11' ],
  [ '�� 3.12' , '03-naming/example_3.12' ],
  [ '�� 3.13' , '03-naming/example_3.13' ],
  [ '�� 3.14' , '03-naming/example_3.14' ],
  [ '�� 3.15' , '03-naming/example_3.15' ],
  [ '�� 3.16' , '03-naming/example_3.16' ],
  [ '�� 3.22' , '03-naming/example_3.22' ],
  [ '�� 3.23' , '03-naming/example_3.23' ],
  [ '�� 3.24' , '03-naming/example_3.24' ],
  [ '�� 3.26 ~ 3.27' , '03-naming/example_3.26-27' ],
  [ '�� 3.28' , '03-naming/example_3.28' ],
  [ '�� 3.29' , '03-naming/example_3.29' ],
  [ '�� 3.30' , '03-naming/example_3.30' ],
  [ '�� 3.31' , '03-naming/example_3.31' ],
  [ '�� 3.32' , '03-naming/example_3.32' ],
  [ '�� 3.33' , '03-naming/example_3.33' ],
  [ '�� 3.38 ~ 3.39' , '03-naming/example_3.38-39' ],
  [ '�� 3.40 ~ 3.41' , '03-naming/example_3.40-41' ],
  [ '�������� 3.6' , '03-naming/exercise_3.6' ]
 ],
 [ 'Chapter 4&nbsp;&nbsp;�ǹ� �м�',null,{},
  [ '�� 4.2' , '04-semantics/example_4.2' ]
 ],
 [ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapter 5&nbsp;&nbsp;Ÿ�� �ӽ��� ����',null,
   {'s0':'menu2RootNotLinked','s4':'menu2RootNotLinked','s8':'menu2RootNotLinked','s12':'menu2RootNotLinked',
    's64':'menu2RootNotLinked','s68':'menu2RootNotLinked','s72':'menu2RootNotLinked','s76':'menu2RootNotLinked'}
 ],
 [ 'Chapter 6&nbsp;&nbsp;���� �帧',null,{},
  [ '�� 6.14' , '06-control/example_6.14' ],
  [ '�� 6.15' , '06-control/example_6.15' ],
  [ '�� 6.16' , '06-control/example_6.16' ],
  [ '�� 6.18' , '06-control/example_6.18' ],
  [ '�� 6.19 ~ 6.23' , '06-control/example_6.19-23' ],
  [ '�� 6.26' , '06-control/example_6.26' ],
  [ '�� 6.31' , '06-control/example_6.31' ],
  [ '�� 6.34 ~ 6.35' , '06-control/example_6.34-35' ],
  [ '�� 6.36' , '06-control/example_6.36' ],
  [ '�� 6.39 ~ 6.41' , '06-control/example_6.39-41' ],
  [ '�� 6.42' , '06-control/example_6.42' ],
  [ '�� 6.51' , '06-control/example_6.51' ],
  [ '�� 6.54' , '06-control/example_6.54' ],
  [ '�� 6.64' , '06-control/example_6.64' ],
  [ '�� 6.69' , '06-control/example_6.69' ],
  [ '�� 6.70' , '06-control/example_6.70' ],
  [ '�� 6.71' , '06-control/example_6.71' ],
  [ '�� 6.72' , '06-control/example_6.72' ],
  [ '�� 6.74' , '06-control/example_6.74' ],
  [ '�� 6.83 ~ 6.86' , '06-control/example_6.83-86' ],
  [ '�� 6.87' , '06-control/example_6.87' ],
  [ '�� 6.88 to 6.90' , '06-control/example_6.88-90' ],
  [ '�� 6.92 to 6.93' , '06-control/example_6.92-93' ],
  [ '�� 6.94' , '06-control/example_6.94' ],
  [ '�� 6.95 to 6.98' , '06-control/example_6.95-98' ],
  [ '�� 6.100 to 6.101' , '06-control/example_6.100-101' ],
  [ '�� 6.103' , '06-control/example_6.103' ],
  [ '�� 6.105' , '06-control/example_6.105' ],
  [ '�� 6.22' , '06-control/exercise_6.22' ],
  [ 'Ž������ 6.36' , '06-control/exploration_6.36' ]
 ],
 [ 'Chapter 7&nbsp;&nbsp;�ڷ���',null,{},
  [ '�� 7.3 ~ 7.13' , '07-types/example_7.3-13' ],
  [ '�� 7.17 ~ 7.32' , '07-types/example_7.17-32' ],
  [ '�� 7.33 ~ 7.42' , '07-types/example_7.33-42' ],
  [ '�� 7.43 ~ 7.53' , '07-types/example_7.43-53' ],
  [ '�� 7.54 ~ 7.57' , '07-types/example_7.54-57' ],
  [ '�� 7.58' , '07-types/example_7.58' ],
  [ '�� 7.61' , '07-types/example_7.61' ],
  [ '�� 7.62' , '07-types/example_7.62' ],
  [ '�� 7.64' , '07-types/example_7.64' ],
  [ '�� 7.67' , '07-types/example_7.67' ],
  [ '�� 7.75' , '07-types/example_7.75' ],
  [ '�� 7.76 ~ 7.86' , '07-types/example_7.76-86' ],
  [ '�� 7.87 ~ 7.92' , '07-types/example_7.87-92' ],
  [ '�� 7.99 ~ 7.-102' , '07-types/example_7.99-102' ],
  [ '�� 7.103' , '07-types/example_7.103' ],
  [ '�� 7.104 ~ 7.121' , '07-types/example_7.104-121' ],
  [ '�� 7.127 ~ 7.128' , '07-types/example_7.127-128' ],
  [ '�� 7.132 ~ 7.134' , '07-types/example_7.132-134' ],
  [ '�� 7.135 ~ 7.136' , '07-types/example_7.135-136' ],
  [ '�� 7.137 ~ 7.139' , '07-types/example_7.137-139' ],
  [ '�� 7.140 ~ 7.143' , '07-types/example_7.140-143' ],
  [ '�׸� 7.5' , '07-types/figure_7.5' ]
 ],
 [ 'Chapter 8&nbsp;&nbsp;�����ƾ�� ���� �߻�ȭ',null,{},
  [ '�� 8.6 ~ 8.7' , '08-subroutines/example_8.6-7' ],
  [ '�� 8.18 ~ 8.22' , '08-subroutines/example_8.18-22' ],
  [ '�� 8.26 ~ 8.28' , '08-subroutines/example_8.26-28' ],
  [ '�� 8.30' , '08-subroutines/example_8.30' ],
  [ '�� 8.31' , '08-subroutines/example_8.31' ],
  [ '�� 8.32' , '08-subroutines/example_8.32' ],
  [ '�� 8.36 ~ 8.39' , '08-subroutines/example_8.36-39' ],
  [ '�� 8.64' , '08-subroutines/example_8.64' ],
  [ '�� 8.65 ~ 8.66' , '08-subroutines/example_8.65-66' ],
  [ '�� 8.67 ~ 8.68' , '08-subroutines/example_8.67-68' ],
  [ '�� 8.74' , '08-subroutines/example_8.74' ],
  [ '�� 8.77 ~ 8.78' , '08-subroutines/example_8.77-78' ],
  [ '�������� 8.14' , '08-subroutines/exercise_8.14' ],
  [ '�������� 8.25' , '08-subroutines/exercise_8.25' ],
  [ '�������� 8.26' , '08-subroutines/exercise_8.26' ],
  [ '�������� 8.27' , '08-subroutines/exercise_8.27' ]
 ],
 [ 'Chapter 9&nbsp;&nbsp;�ڷ� �߻�ȭ�� ��ü����',null,{},
  [ '�� 9.1 ~ 9.7' , '09-objects/example_9.1-7' ],
  [ '�� 9.9 ~ 9.12' , '09-objects/example_9.9-12' ],
  [ '�� 9.19' , '09-objects/example_9.19' ],
  [ '�� 9.21' , '09-objects/example_9.21' ],
  [ '�� 9.27 ~ 9.28' , '09-objects/example_9.27-28' ],
  [ '�� 9.30' , '09-objects/example_9.30' ],
  [ '�� 9.31 ~ 9.34' , '09-objects/example_9.31-34' ],
  [ '�� 9.36' , '09-objects/example_9.36' ],
  [ '�� 9.37 ~ 9.38' , '09-objects/example_9.37-38' ],
  [ '�� 9.44 ~ 9.45' , '09-objects/example_9.44-45' ],
  [ '�� 9.47 ~ 9.48' , '09-objects/example_9.47-48' ],
  [ '�� 9.54 ~ 9.55' , '09-objects/example_9.54-55' ],
  [ '�� 9.56 ~ 9.57' , '09-objects/example_9.56-57' ],
  [ '�� 9.62' , '09-objects/example_9.62' ]
 ],
 [ 'Chapter 10&nbsp;&nbsp;�Լ��� ���',null,{},
  [ '�� 10.2 ~ 10.20' , '10-functional/example_10.2-20' ],
  [ '�� 10.23' , '10-functional/example_10.23' ],
  [ '�� 10.24 ~ 10.25' , '10-functional/example_10.24-25' ],
  [ '�� 10.26 ~ 10.27' , '10-functional/example_10.26-27' ],
  [ '�� 10.29 ~ 10.30' , '10-functional/example_10.29-30' ],
  [ '�� 10.32 ~ 10.36' , '10-functional/example_10.32-36' ],
  [ '�� 10.37 ~ 10.42' , '10-functional/example_10.37-42' ],
  [ '�������� 10.6' , '10-functional/exercise_10.6' ],
  [ '�������� 10.7' , '10-functional/exercise_10.7' ],
  [ '�������� 10.13' , '10-functional/exercise_10.13' ],
  [ '�������� 10.18' , '10-functional/exercise_10.18' ]
 ],
 [ 'Chapter 11&nbsp;&nbsp;���� ���',null,{},
  [ '�� 11.7 ~ 11.18' , '11-logic/example_11.7-18' ],
  [ '�� 11.19' , '11-logic/example_11.19' ],
  [ '�� 11.20 ~ 11.33' , '11-logic/example_11.20-33' ],
  [ '�� 11.29' , '11-logic/example_11.29' ],
  [ '�� 11.35 ~ 11.36' , '11-logic/example_11.35-36' ],
  [ '�������� 11.14' , '11-logic/exercise_11.14' ]
 ],
 [ 'Chapter 12&nbsp;&nbsp;���� ó��',null,{},
  [ '�� 12.15 to 12.16' , '12-concurrency/example_12.15-16' ],
  [ '�� 12.45 to 12.46' , '12-concurrency/example_12.45-46' ],
  [ '�� 12.50' , '12-concurrency/example_12.50' ],
  [ '�� 12.55' , '12-concurrency/example_12.55' ]
 ],
 [ 'Chapter 13&nbsp;&nbsp;��ũ���� ���',null,{},
  [ '�� 13.17' , '13-scripting/example_13.17' ],
  [ '�� 13.19' , '13-scripting/example_13.19' ],
  [ '�� 13.21' , '13-scripting/example_13.21' ],
  [ '�� 13.22' , '13-scripting/example_13.22' ],
  [ '�� 13.23' , '13-scripting/example_13.23' ],
  [ '�� 13.24' , '13-scripting/example_13.24' ],
  [ '�� 13.25' , '13-scripting/example_13.25' ],
  [ '�� 13.27' , '13-scripting/example_13.27' ],
  [ '�� 13.28' , '13-scripting/example_13.28' ],
  [ '�� 13.29' , '13-scripting/example_13.29' ],
  [ '�� 13.30' , '13-scripting/example_13.30' ],
  [ '�� 13.31' , '13-scripting/example_13.31' ],
  [ '�� 13.32' , '13-scripting/example_13.32' ],
  [ '�� 13.33' , '13-scripting/example_13.33' ],
  [ '�� 13.34' , '13-scripting/example_13.34' ],
  [ '�� 13.35' , '13-scripting/example_13.35' ],
  [ '�� 13.40' , '13-scripting/example_13.40' ],
  [ '�� 13.42' , '13-scripting/example_13.42' ],
  [ '�� 13.43' , '13-scripting/example_13.43' ],
  [ '�� 13.45' , '13-scripting/example_13.45' ],
  [ '�� 13.46' , '13-scripting/example_13.46' ],
  [ '�� 13.47' , '13-scripting/example_13.47' ],
  [ '�� 13.64' , '13-scripting/example_13.64' ],
  [ '�� 13.79 ~ 13.82' , '13-scripting/example_13.79-82' ],
  [ '�� 13.83 ~ 13.85' , '13-scripting/example_13.83-85' ],
  [ '�� 13.86' , '13-scripting/example_13.86' ],
  [ '�������� 13.11' , '13-scripting/exercise_13.11' ],
  [ '�������� 13.16' , '13-scripting/exercise_13.16' ],
  [ '�������� 13.19' , '13-scripting/exercise_13.19' ],
  [ '�������� 13.20' , '13-scripting/exercise_13.20' ]
 ],
 [ '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chapter 14&nbsp;&nbsp;���� ������ ���α׷� �ۼ�',null,
   {'s0':'menu2RootNotLinked','s4':'menu2RootNotLinked','s8':'menu2RootNotLinked','s12':'menu2RootNotLinked',
    's64':'menu2RootNotLinked','s68':'menu2RootNotLinked','s72':'menu2RootNotLinked','s76':'menu2RootNotLinked'}
 ],
 [ 'Chapter 15&nbsp;&nbsp;�ڵ� ����',null,{},
  [ '�� 15.10' , '15-improvement/example_15.10' ],
  [ '�������� 15.22' , '15-improvement/exercise_15.22' ],
  [ '�������� 15.23' , '15-improvement/exercise_15.23' ]
 ]
];
