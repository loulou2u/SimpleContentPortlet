/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.dialog.add('colordialog',function(a){var b=CKEDITOR.dom.element,c=CKEDITOR.document,d=CKEDITOR.tools,e=a.lang.colordialog,f;function g(){return{type:'html',html:'&nbsp;'};};var h=new b('table');k();var i=function(n){var o=new b(n.data.getTarget()).getAttribute('title');c.getById('hicolor').setStyle('background-color',o);c.getById('hicolortext').setHtml(o);},j=function(n){var o=new b(n.data.getTarget()).getAttribute('title');f.getContentElement('picker','selectedColor').setValue(o);};function k(){var n=['00','33','66','99','cc','ff'];function o(t,u){for(var v=t;v<t+3;v++){var w=h.$.insertRow(-1);for(var x=u;x<u+3;x++)for(var y=0;y<6;y++)p(w,'#'+n[x]+n[y]+n[v]);}};function p(t,u){var v=new b(t.insertCell(-1));v.setAttribute('class','ColorCell');v.setStyle('background-color',u);v.setStyle('width','15px');v.setStyle('height','15px');v.setAttribute('title',u);};o(0,0);o(3,0);o(0,3);o(3,3);var q=h.$.insertRow(-1);for(var r=0;r<6;r++)p(q,'#'+n[r]+n[r]+n[r]);for(var s=0;s<12;s++)p(q,'#000000');};function l(){c.getById('selhicolor').removeStyle('background-color');f.getContentElement('picker','selectedColor').setValue('');};var m=d.addFunction(function(){c.getById('hicolor').removeStyle('background-color');c.getById('hicolortext').setHtml('&nbsp;');});return{title:e.title,minWidth:360,minHeight:220,onLoad:function(){f=this;},contents:[{id:'picker',label:e.title,accessKey:'I',elements:[{type:'hbox',padding:0,widths:['70%','10%','30%'],children:[{type:'html',html:'<table onmouseout="CKEDITOR.tools.callFunction( '+m+' );">'+h.getHtml()+'</table>',onLoad:function(){var n=CKEDITOR.document.getById(this.domId);n.on('mouseover',i);n.on('click',j);}},g(),{type:'vbox',padding:0,widths:['70%','5%','25%'],children:[{type:'html',html:'<span>'+e.highlight+'</span>\t\t\t\t\t\t\t\t\t\t\t\t<div id="hicolor" style="border: 1px solid; height: 74px; width: 74px;"></div>\t\t\t\t\t\t\t\t\t\t\t\t<div id="hicolortext">&nbsp;</div>\t\t\t\t\t\t\t\t\t\t\t\t<span>'+e.selected+'</span>\t\t\t\t\t\t\t\t\t\t\t\t<div id="selhicolor" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:'text',id:'selectedColor',style:'width: 74px',onChange:function(){try{c.getById('selhicolor').setStyle('background-color',this.getValue());}catch(n){l();}}},g(),{type:'button',id:'clear',style:'margin-top: 5px',label:e.clear,onClick:l}]}]}]}]};});