webpackJsonp([67055671156237],{442:function(n,s){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/eAUEx7k.png" alt="Image to be displayed"></p>\n<p><code>SingleList</code> creates a single selection based list UI component that is connected to a database field.</p>\n<p>Example uses:</p>\n<ul>\n<li>select a category item from a list of categories in an e-commerce website.</li>\n<li>select a cuisine item from a list of cuisine items in a food delivery app.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>single-list</span>\n        <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CitySensor<span class="token punctuation">"</span></span>\n        <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>group.group_city.raw<span class="token punctuation">"</span></span>\n        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cities<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>single-list</span>\n        <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CitySensor<span class="token punctuation">"</span></span>\n        <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>group.group_city.raw<span class="token punctuation">"</span></span>\n        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cities<span class="token punctuation">"</span></span>\n        <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>count<span class="token punctuation">"</span></span>\n        <span class="token attr-name">defaultSelected</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>London<span class="token punctuation">"</span></span>\n        <span class="token attr-name">selectAllLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>All Cities<span class="token punctuation">"</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search City<span class="token punctuation">"</span></span>\n        <span class="token attr-name">filterLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>City<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:showRadio</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:showCount</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:showSearch</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:showFilter</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:URLParams</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>\n        <span class="token attr-name">:react</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ and: [<span class="token punctuation">\'</span>CategoryFilter<span class="token punctuation">\'</span>, <span class="token punctuation">\'</span>SearchFilter<span class="token punctuation">\'</span>] }<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view. The list items are filtered by a database query on this field. This field is used for doing an aggregation and returns the result. We’re using a <code>.raw</code> multifield here. You can use a field of type <code>keyword</code> or <code>not_analyzed</code> depending on your Elasticsearch cluster.</li>\n<li><strong>nestedField</strong> <code>String</code> [optional]<br>\nuse to set the <code>nested</code>  mapping field that allows arrays of objects to be indexed in a way that they can be queried independently of each other. Applicable only when dataField is a part of <code>nested</code> type.</li>\n<li><strong>title</strong> <code>String or JSX</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>size</strong> <code>Number</code> [optional]<br>\ncontrol how many items to display in the List. Defaults to 100.</li>\n<li><strong>sortBy</strong> <code>String</code> [optional]<br>\nsort the list items by one of <code>count</code>, <code>asc</code>, <code>desc</code>. Defaults to <code>count</code>, which sorts the list by the frequency of count     value, most first.</li>\n<li><strong>defaultSelected</strong> <code>string</code> [optional]<br>\npre-select an item from the list.</li>\n<li><strong>selectAllLabel</strong> <code>String</code> [optional]<br>\nadd an extra <code>Select all</code> item to the list with the provided label string.</li>\n<li><strong>showRadio</strong> <code>Boolean</code> [optional]<br>\nshow radio button icon for each list item. Defaults to <code>true</code>.</li>\n<li><strong>showCount</strong> <code>Boolean</code> [optional]<br>\nshow count value of the number of occurences besides a list item. Defaults to <code>true</code>.</li>\n<li><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code>true</code>.</li>\n<li><strong>filterLabel</strong> <code>String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code>showFilter</code> is enabled. Default value used here is <code>componentId</code>.</li>\n<li><strong>showMissing</strong> <code>Boolean</code> [optional]<br>\ndefaults to <code>false</code>. When set to <code>true</code> it also retrives the aggregations for missing fields under the label specified by <code>missingLabel</code>.</li>\n<li><strong>missingLabel</strong> <code>String</code> [optional]<br>\ndefaults to <code>N/A</code>. Specify a custom label to show when <code>showMissing</code> is set to <code>true</code>.</li>\n<li><strong>showSearch</strong> <code>Boolean</code> [optional]<br>\nwhether to show a searchbox to filter the list items locally. Defaults to true.</li>\n<li><strong>placeholder</strong> <code>String</code> [optional]<br>\nplaceholder to be displayed in the searchbox, only applicable when the <code>showSearch</code> prop is set to true. When applicable, the default placeholder value is set to “Search”.</li>\n<li><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</li>\n<li>\n<p><strong>renderItem</strong> <code>Function|scoped-slot</code> [optional]<br>\ncustomize the rendered list via a function or scoped-slot which receives the item label, count and isChecked &#x26; expects a JSX or String back. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>renderItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> label<span class="token punctuation">,</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>label<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'dodgerblue\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>count<span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>or</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>renderItem<span class="token punctuation">"</span></span> <span class="token attr-name">scoped-slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ label, count }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    {{label}}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:</span><span class="token style-attr language-css"><span class="token attr-name"><span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token punctuation">{</span> <span class="token property">marginLeft</span><span class="token punctuation">:</span> 5, <span class="token property">color</span><span class="token punctuation">:</span> <span class="token string">\'dodgerblue\'</span> <span class="token punctuation">}</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        {{count}}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n</li>\n<li><strong>renderError</strong> <code>String|Function|scoped-slot</code> [optional]\ncan be used to render an error message in case of any error.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>    renderError<span class="token operator">=</span><span class="token punctuation">{</span>error <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                Something went wrong<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>Error details<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span><span class="token punctuation">{</span>error<span class="token punctuation">}</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>or</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>renderError<span class="token punctuation">"</span></span> <span class="token attr-name">scoped-slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            Something went wrong!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>Error details<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>{{ error }}\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>transformData</strong> <code>Function</code> [optional]<br>\nallows transforming the data to render inside the list. You can change the order, remove, or add items, tranform their values with this method. It provides the data as param which is an array of objects of shape { key: <string>, doc_count: <number> } and expects you to return the array of objects of same shape.</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/vue/examples/single-list" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>SingleList</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>title</code></li>\n<li><code>input</code></li>\n<li><code>list</code></li>\n<li><code>radio</code></li>\n<li><code>label</code></li>\n<li><code>count</code></li>\n</ul>\n<p>Read more about it <a href="/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>SingleList</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>valueChange</code> and <code>queryChange</code>,</li>\n<li>specify how options should be filtered or updated using <code>react</code> prop.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>single<span class="token operator">-</span>list\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  <span class="token punctuation">:</span>customQuery<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value, props) {\n      return {\n        query: {\n            match: {\n                data_field: "this is a test"\n            }\n        }\n      }\n    }`</span></span>\n  <span class="token punctuation">:</span>beforeValueChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value) {\n      // called before the value is set\n      // returns a promise\n      return new Promise((resolve, reject) => {\n        // update state or component props\n        resolve()\n        // or reject()\n      })\n    }`</span></span>\n  @valueChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value) {\n      console.log("current value: ", value)\n      // set the state\n      // use the value with other js code\n    }`</span></span>\n  @queryChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(prevQuery, nextQuery) {\n      // use the query with other js code\n      console.log(\'prevQuery\', prevQuery);\n      console.log(\'nextQuery\', nextQuery);\n    }`</span></span>\n  <span class="token comment">// specify how and which options are filtered using `react` prop.</span>\n  <span class="token punctuation">:</span>react<span class="token operator">=</span><span class="token template-string"><span class="token string">`{\n    "and": ["pricingFilter", "dateFilter"],\n    "or": ["searchFilter"]\n  }`</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>customQuery</strong> <code>Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>SingleList</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>defaultQuery</strong> <code>Function</code>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the source component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> defaultQuery doesn’t get leaked to other components.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li>\n<p><strong>react</strong> <code>Object</code><br>\nspecify dependent components to reactively update <strong>SingleList’s</strong> options.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code><br>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code>  </p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<ul>\n<li>\n<p><strong>queryChange</strong><br>\nis an event which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This event is handy in cases where you want to generate a side-effect whenever the component’s query would change.</p>\n</li>\n<li>\n<p><strong>valueChange</strong><br>\nis an event which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This event is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a list item is selected in a “Discounted Price” SingleList.</p>\n</li>\n<li>\n<p><strong>error</strong>\ngets triggered in case of an error and provides the <code>error</code> object, which can be used for debugging or giving feedback to the user if needed.</p>\n</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://reactivesearch-vue-playground.netlify.com/?selectedKind=List%20Components%2FSingleList&selectedStory=Basic&full=0&addons=1&stories=1&panelRight=0" target="_blank">SingleList with default props</a></p>',frontmatter:{title:"SingleList",next:"list-components/multilist.html",prev:null,nextTitle:"MultiList",prevTitle:null},fields:{path:"docs/list-components/SingleList.md",slug:"list-components/singlelist.html"}}},pathContext:{slug:"list-components/singlelist.html"}}}});
//# sourceMappingURL=path---list-components-singlelist-html-cc3dd3441ec1ac2c3183.js.map