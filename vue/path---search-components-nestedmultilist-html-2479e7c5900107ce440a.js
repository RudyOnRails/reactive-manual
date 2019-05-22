webpackJsonp([66859308510187],{498:function(s,n){s.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/RDiXRqs.png" alt="Image to be displayed"></p>\n<p><code class="gatsby-code-text">NestedMultiList</code> creates a nested multiple selection list UI component. It is used for filtering items by a hierarchy of categories.</p>\n<p>Example uses:</p>\n<ul>\n<li>show a two-level or three-level category list for an e-commerce search experience.</li>\n<li>building an e-learning system with multiple courses based selections.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NestedMultiList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CarCategorySensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"brand.raw"</span><span class="token punctuation">,</span> <span class="token string">"model.raw"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NestedMultiList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CarCategorySensor<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"brand.raw"</span><span class="token punctuation">,</span> <span class="token string">"model.raw"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>List of Brand > Model<span class="token punctuation">"</span></span>\n  <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>asc<span class="token punctuation">"</span></span>\n  <span class="token attr-name">defaultSelected</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"ford"</span><span class="token punctuation">,</span> <span class="token string">"galaxy"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showCount</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showSearch</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span>\n  <span class="token attr-name">loader</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Fetching cars..<span class="token punctuation">"</span></span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CategoryFilter"</span><span class="token punctuation">,</span> <span class="token string">"SearchFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showFilter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">filterLabel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cars filter<span class="token punctuation">"</span></span>\n  <span class="token attr-name">URLParams</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code class="gatsby-code-text">String</code><br>\nunique identifier of the component, can be referenced in other components’ <code class="gatsby-code-text">react</code> prop.</li>\n<li><strong>dataField</strong> <code class="gatsby-code-text">Array</code><br>\ndata field(s) to be mapped with the component’s UI view. A nested list component supports multiple fields passed as an Array denoting the order of nesting.</li>\n<li><strong>title</strong> <code class="gatsby-code-text">String or JSX</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>size</strong> <code class="gatsby-code-text">Number</code> [optional]<br>\ncontrol how many items to display in the List. Defaults to 100.</li>\n<li><strong>sortBy</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nsort the list items by one of <code class="gatsby-code-text">count</code>, <code class="gatsby-code-text">asc</code>, or <code class="gatsby-code-text">desc</code>. Defaults to <code class="gatsby-code-text">count</code>, which sorts the list by the frequency of count     value, most first.</li>\n<li><strong>defaultSelected</strong> <code class="gatsby-code-text">Array</code> [optional]<br>\npre-select nested list item(s). Accepts an <code class="gatsby-code-text">Array</code> object containing the hierarchy of items to be selected. It is important that the passed value(s) exactly match the field value(s) as stored in the DB.</li>\n<li><strong>showCount</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nshow a count of the number of occurrences besides each list item. Defaults to <code class="gatsby-code-text">true</code>.</li>\n<li><strong>showSearch</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nwhether to show a searchbox to filter the list items locally. Defaults to true.</li>\n<li><strong>placeholder</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nplaceholder to be displayed in the searchbox, only applicable when the <code class="gatsby-code-text">showSearch</code> prop is set to <code class="gatsby-code-text">true</code>. When applicable, the default placeholder value is set to “Search”.</li>\n<li><strong>loader</strong> <code class="gatsby-code-text">String or JSX</code> [optional]<br>\ndisplay text while the data is being fetched, accepts <code class="gatsby-code-text">String</code> or <code class="gatsby-code-text">JSX</code> markup.</li>\n<li><strong>showFilter</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nshow as filter when a value is selected in a global selected filters view. Defaults to <code class="gatsby-code-text">true</code>.</li>\n<li><strong>filterLabel</strong> <code class="gatsby-code-text">String</code> [optional]<br>\nAn optional label to display for the component in the global selected filters view. This is only applicable if <code class="gatsby-code-text">showFilter</code> is enabled. Default value used here is <code class="gatsby-code-text">componentId</code>.</li>\n<li><strong>URLParams</strong> <code class="gatsby-code-text">Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to <code class="gatsby-code-text">false</code>.</li>\n</ul>\n<blockquote>\n<p>Note</p>\n<p>A NestedMultiList component’s props are exactly like a <a href="/search-components/nestedlist.html">NestedList component</a> except for the <code class="gatsby-code-text">defaultSelected</code> prop which can take an Array with multiple selections like <code class="gatsby-code-text">{[&quot;Car&quot;, [&quot;ford&quot;, &quot;galaxy&quot;]]}</code>.</p>\n</blockquote>\n<h2 id="syntax"><a href="#syntax" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntax</h2>\n<br>\n<iframe height=\'500\' scrolling=\'no\' title=\'NestedMultiList docs example\' src=\'//codepen.io/sids-aquarius/embed/ayXeyv/?height=500&theme-id=light&default-tab=js&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/sids-aquarius/pen/ayXeyv/\'>NestedMultiList docs example</a> by Siddharth Kothari (<a href=\'https://codepen.io/sids-aquarius\'>@sids-aquarius</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p>All reactivebase components are <code class="gatsby-code-text">rbc</code> namespaced.</p>\n<p><img src="" alt="Annotated image"></p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code class="gatsby-code-text">NestedMultiList</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code class="gatsby-code-text">className</code>, <code class="gatsby-code-text">style</code>,</li>\n<li>update the underlying DB query with <code class="gatsby-code-text">customQuery</code>,</li>\n<li>connect with external interfaces using <code class="gatsby-code-text">beforeValueChange</code>, <code class="gatsby-code-text">onValueChange</code> and <code class="gatsby-code-text">onQueryChange</code>,</li>\n<li>filter data using a combined query context via the <code class="gatsby-code-text">react</code> prop.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token operator">&lt;</span>NestedMultiList\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">"paddingBottom"</span><span class="token punctuation">:</span> <span class="token string">"10px"</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n  customQuery<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        query<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          match<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            data_field<span class="token punctuation">:</span> <span class="token string">"this is a test"</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  beforeValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// called before the value is set</span>\n      <span class="token comment">// returns a promise</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token comment">// update state or component props</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// or reject()</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onValueChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"current value: "</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n      <span class="token comment">// set the state</span>\n      <span class="token comment">// use the value with other js code</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  onQueryChange<span class="token operator">=</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>prevQuery<span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// use the query with other js code</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'prevQuery\'</span><span class="token punctuation">,</span> prevQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'nextQuery\'</span><span class="token punctuation">,</span> nextQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  react<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"PriceFilter"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span></code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code class="gatsby-code-text">String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code class="gatsby-code-text">Object</code><br>\nCSS styles to be applied to the <strong>NestedMultiList</strong> component.</li>\n<li><strong>customQuery</strong> <code class="gatsby-code-text">Function</code><br>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code class="gatsby-code-text">Note:</code> customQuery is called on value changes in the <strong>NestedMultiList</strong> component as long as the component is a part of <code class="gatsby-code-text">react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called every time before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n<li><strong>onValueChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s current <strong>value</strong> as a parameter. It is called every time the component’s value changes. This prop is handy in cases where you want to generate a side-effect on value selection. For example: You want to show a pop-up modal with the valid discount coupon code when a user selects a product in a NestedMultiList.</li>\n<li><strong>onQueryChange</strong> <code class="gatsby-code-text">Function</code><br>\nis a callback function which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This prop is handy in cases where you want to generate a side-effect whenever the component’s query would change.</li>\n<li>\n<p><strong>react</strong> <code class="gatsby-code-text">Object</code><br>\nspecify dependent components to reactively update <strong>NestedMultiList’s</strong> data view.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code class="gatsby-code-text">String</code><br>\none of <code class="gatsby-code-text">and</code>, <code class="gatsby-code-text">or</code>, <code class="gatsby-code-text">not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code class="gatsby-code-text">String or Array or Object</code>  </p>\n<ul>\n<li><code class="gatsby-code-text">String</code> is used for specifying a single component by its <code class="gatsby-code-text">componentId</code>.</li>\n<li><code class="gatsby-code-text">Array</code> is used for specifying multiple components by their <code class="gatsby-code-text">componentId</code>.</li>\n<li><code class="gatsby-code-text">Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<br>\n<iframe height=\'500\' scrolling=\'no\' title=\'NestedMultiList docs example\' src=\'//codepen.io/sids-aquarius/embed/ayXeyv/?height=500&theme-id=light&default-tab=result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/sids-aquarius/pen/ayXeyv/\'>NestedMultiList docs example</a> by Siddharth Kothari (<a href=\'https://codepen.io/sids-aquarius\'>@sids-aquarius</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<ol>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-showFilter=true&#x26;knob-filterLabel=City%20filter&#x26;selectedKind=search%2FNestedMultiList&#x26;selectedStory=Basic&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">NestedMultiList with all the default props</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-showFilter=true&#x26;knob-filterLabel=City%20filter&#x26;knob-title=Car%20Category&#x26;selectedKind=search%2FNestedMultiList&#x26;selectedStory=With%20Title&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">NestedMultiList with title</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-showFilter=true&#x26;knob-filterLabel=City%20filter&#x26;knob-title=Car%20Category&#x26;knob-defaultSelected%5B0%5D=bmw&#x26;knob-defaultSelected%5B1%5D=x%20series&#x26;selectedKind=search%2FNestedMultiList&#x26;selectedStory=Default%20selection&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">NestedMultiList with default selection</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-title=NestedMultiList%3A%20Car%20Filter&#x26;knob-filterLabel=Cars&#x26;knob-defaultSelected%5B0%5D=bmw&#x26;knob-defaultSelected%5B1%5D=x%20series&#x26;knob-URLParams%20%28not%20visible%20on%20storybook%29=false&#x26;knob-showFilter=true&#x26;knob-sortBy=count&#x26;knob-size=100&#x26;knob-showCount=true&#x26;knob-placeholder=Search%20Cars&#x26;knob-showSearch=true&#x26;selectedKind=search%2FNestedMultiList&#x26;selectedStory=Playground&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%2Fstorybook-addon-knobs">Playground (with all knob actions)</a></p>\n</li>\n</ol>',frontmatter:{title:"NestedMultiList",next:"search-components/resultcard.html",prev:"search-components/nestedlist.html",nextTitle:"ResultCard",prevTitle:"NestedList"},fields:{path:"docs/list-components/NestedMultiList",slug:"search-components/nestedmultilist.html"}}},pathContext:{slug:"search-components/nestedmultilist.html"}}}});
//# sourceMappingURL=path---search-components-nestedmultilist-html-2479e7c5900107ce440a.js.map