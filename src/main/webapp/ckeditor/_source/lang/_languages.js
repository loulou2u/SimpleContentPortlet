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

var CKEDITOR_LANGS = (function()
{
	var langs =
	{
		af		: 'Afrikaans',
		ar		: 'Arabic',
		bg		: 'Bulgarian',
		bn		: 'Bengali/Bangla',
		bs		: 'Bosnian',
		ca		: 'Catalan',
		cs		: 'Czech',
		cy		: 'Welsh',
		da		: 'Danish',
		de		: 'German',
		el		: 'Greek',
		en		: 'English',
		'en-au'	: 'English (Australia)',
		'en-ca'	: 'English (Canadian)',
		'en-gb'	: 'English (United Kingdom)',
		eo		: 'Esperanto',
		es		: 'Spanish',
		et		: 'Estonian',
		eu		: 'Basque',
		fa		: 'Persian',
		fi		: 'Finnish',
		fo		: 'Faroese',
		fr		: 'French',
		'fr-ca'	: 'French (Canada)',
		gl		: 'Galician',
		gu		: 'Gujarati',
		he		: 'Hebrew',
		hi		: 'Hindi',
		hr		: 'Croatian',
		hu		: 'Hungarian',
		is		: 'Icelandic',
		it		: 'Italian',
		ja		: 'Japanese',
		km		: 'Khmer',
		ko		: 'Korean',
		lt		: 'Lithuanian',
		lv		: 'Latvian',
		mn		: 'Mongolian',
		ms		: 'Malay',
		nb		: 'Norwegian Bokmal',
		nl		: 'Dutch',
		no		: 'Norwegian',
		pl		: 'Polish',
		pt		: 'Portuguese (Portugal)',
		'pt-br'	: 'Portuguese (Brazil)',
		ro		: 'Romanian',
		ru		: 'Russian',
		sk		: 'Slovak',
		sl		: 'Slovenian',
		sr		: 'Serbian (Cyrillic)',
		'sr-latn'	: 'Serbian (Latin)',
		sv		: 'Swedish',
		th		: 'Thai',
		tr		: 'Turkish',
		uk		: 'Ukrainian',
		vi		: 'Vietnamese',
		zh		: 'Chinese Traditional',
		'zh-cn'	: 'Chinese Simplified'
	};

	var langsArray = [];

	for ( var code in langs )
	{
		langsArray.push( { code : code, name : langs[ code ] } );
	}

	langsArray.sort( function( a, b )
		{
			return ( a.name < b.name ) ? -1 : 1;
		});

	return langsArray;
})();