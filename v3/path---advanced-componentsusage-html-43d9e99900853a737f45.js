webpackJsonp([49794618776653],{450:function(n,a){n.exports={data:{markdownRemark:{html:'<p>With the release of version 3.x.x of reactivesearch, we have changed the way certain props behaved in the earlier versions. To enable effective control over the components, we now support <code class="gatsby-code-text">defaultValue</code> and <code class="gatsby-code-text">value</code> props. These new props enable better controlled and uncontrolled usage for all the reactivesearch components.</p>\n<h2 id="controlled-components"><a href="#controlled-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Controlled components</h2>\n<p><a href="https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components">As reactjs docs put this brilliantly:</a></p>\n<blockquote>\n<p>An input form element whose value is controlled by React is called a controlled component. When a user enters data into a controlled component a change event handler is triggered and <strong>your code</strong> decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.</p>\n</blockquote>\n<p>This essentially puts you in control. You can decide whether to update the current value of the component or not - via <code class="gatsby-code-text">onChange</code> handler supported by every component.</p>\n<p>A typical usage example for controlled component will look like:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase<span class="token punctuation">,</span> SingleList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    state <span class="token operator">=</span> <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'Harry Potter\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            value<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleList</span>\n                    <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>books<span class="token punctuation">"</span></span>\n                    <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n                    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n                <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="uncontrolled-components"><a href="#uncontrolled-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Uncontrolled components</h2>\n<p>We now support <code class="gatsby-code-text">defaultValue</code> prop to enable uncontrolled behavior on reactivesearch components. <a href="https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components">React docs define uncontrolled components as:</a></p>\n<blockquote>\n<p>An uncontrolled component works like form elements do outside of React. When a user inputs data into a form field (an input box, dropdown, etc) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.</p>\n</blockquote>\n<p>This enables you to set the initial value for any component if you need to . The component handles the updates on the current value on its own. Ideally with reactivesearch, this is what you’d want in the most cases. We can re-write the above code snippet using <code class="gatsby-code-text">defaultValue</code> as:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveBase<span class="token punctuation">,</span> SingleList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SingleList</span>\n                    <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>books<span class="token punctuation">"</span></span>\n                    <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Harry Potter<span class="token punctuation">"</span></span>\n                <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>Please note that we have removed support for <code class="gatsby-code-text">defaultSelected</code> prop from all the reactivesearch components.</p>\n</blockquote>',frontmatter:{title:"Components Usage",next:"migrationguide.html",prev:"ssr.html",nextTitle:"Migration Guide",prevTitle:"Server Side Rendering"},fields:{path:"docs/advanced/ComponentsUsage",slug:"advanced/componentsusage.html"}}},pathContext:{slug:"advanced/componentsusage.html"}}}});
//# sourceMappingURL=path---advanced-componentsusage-html-43d9e99900853a737f45.js.map