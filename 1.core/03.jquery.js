/** $('css selector') **/

$('#myId')  // <div id='myId'></div>  

$('.myClass')  // <div class='myClass'></div>

$('input[name="surname"]') // <input name='surname'/>

$('#contents ul.people li')
/*
<div id='contents'>
	<ul class='people'>
		<li></li>
		<li></li>
	</ul>
</div>
*/

$('a.external:first')
/*
<a class='external'></a> --
<a class='external'></a>
*/

$('tr:odd')
/*
<tr></tr> --
<tr></tr>
<tr></tr> --
*/

$('div:visible')

$('div:gt(1)') // greater than
/*
<div></div>
<div></div>
<div></div> --
*/

$('div:animated')

$('a[rel$="thinger"]')
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/


/** filtering **/
$('div.foo').has('p')
/*
<div class='foo'> --
	<p></p>
</div>
<div class='foo'></div>
*/

$('ul li').filter('.current')
/*
<ul>
	<li class='current'></li> --
	<li></li>
</ul>
*/

$('ul li').not('.current')
/*
<ul>
	<li class='current'></li>
	<li></li> --
</ul>
*/

$('ul li').eq(1)
/*
<ul>
	<li class='current'></li>
	<li></li> --
</ul>
*/

// 과제: home/03.jquery.html
if($('div.foo')) {}
if($('div.foo').length) {}


/** form **/
$('form :button')
/*
<form>
	<button></button>     --
	<input type='button'> --
</form>
*/

$('form :radio')     // <input type='radio'/>
$('form :checkbox')  // <input type='checkbox'/>

$('form :checked')
/*
<input type='checkbox'/>
<input type='radio'/>
<select>
*/

$('from :selected')  // <select><option></option></select>

$('form :enabled')
$('form :disabled')

$('form :file') // <input type='file'/>

$('form :input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button>
*/

$('form :text')   // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio') // <input type='radio' name='gender'/>

$('form :reset')  // <input type='reset'/>

$('form :submit') // <input type='submit'/>

/*
- .has(selector): 
  Reduce the set of matched elements to those that have a descendant 
  that matches the selector or DOM element.

- .not(selector):
  Remove elements from the set of matched elements.

- .filter(selector):
  Reduce the set of matched elements to those that match the selector.

- .eq(index):
  Reduce the set of matched elements to the one at the specified index.
*/