webpackJsonp([382149711765],{502:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Themes can be used to change the default styles for all the ReactiveSearch components. These include basic styles like fonts, colors or component styles. The component styles are applied to most of the components.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p><a href="/reactive-manual/v2/getting-started/reactivebase.html">ReactiveBase</a> acts as the theme provider for all the child ReactiveSearch components. It supports a <code>theme</code> prop which accepts an object with the following defaults:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n\ttypography<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    fontFamily<span class="token punctuation">:</span> <span class="token string">\'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif\'</span><span class="token punctuation">,</span>\n    fontSize<span class="token punctuation">:</span> <span class="token string">\'16px\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\tcolors<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\ttextColor<span class="token punctuation">:</span> <span class="token string">\'#424242\'</span><span class="token punctuation">,</span>\n\t\tprimaryTextColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n\t\tprimaryColor<span class="token punctuation">:</span> <span class="token string">\'#0B6AFF\'</span><span class="token punctuation">,</span>\n\t\ttitleColor<span class="token punctuation">:</span> <span class="token string">\'#424242\'</span><span class="token punctuation">,</span>\n\t\talertColor<span class="token punctuation">:</span> <span class="token string">\'#d9534f\'</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><a href="/reactive-manual/v2/getting-started/reactivebase.html">ReactiveBase</a> also supports a <code>themePreset</code> prop which defaults to <code>light</code> with the above defaults. You may pass a <code>themePreset</code> of <code>dark</code> which applies the following defaults instead:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n\ttypography<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    fontFamily<span class="token punctuation">:</span> <span class="token string">\'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif\'</span><span class="token punctuation">,</span>\n    fontSize<span class="token punctuation">:</span> <span class="token string">\'16px\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n\tcolors<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\ttextColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n\t\tbackgroundColor<span class="token punctuation">:</span> <span class="token string">\'#212121\'</span><span class="token punctuation">,</span>\n\t\tprimaryTextColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n\t\tprimaryColor<span class="token punctuation">:</span> <span class="token string">\'#2196F3\'</span><span class="token punctuation">,</span>\n\t\ttitleColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n\t\talertColor<span class="token punctuation">:</span> <span class="token string">\'#d9534f\'</span><span class="token punctuation">,</span>\n\t\tborderColor<span class="token punctuation">:</span> <span class="token string">\'#666\'</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="extending-theming"><a href="#extending-theming" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending theming</h2>\n<p>It’s possible to use the same theming object used by the ReactiveSearch components in your own React components which are not connected with ReactiveSearch. All the child components of <code>ReactiveBase</code> receive the theming context which can be used as explained by the following example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// your component should be a child of ReactiveBase</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span>\n  <span class="token attr-name">...</span>\n<span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CustomComponent</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Using the <code>withTheme</code> higher order component from <code>emotion-theming</code> in our component:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> withTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'emotion-theming\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">CustomComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> theme <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span> <span class="token comment">// the theme object is received in the props</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withTheme</span><span class="token punctuation">(</span>CustomComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// using the HOC from emotion-theming</span>\n</code></pre>\n      </div>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>You can overwrite the aforementioned default styles by providing the respective key/values as <code>theme</code> prop. The supported keys are <code>typography</code>, <code>colors</code> and <code>component</code>. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveBase\n  app<span class="token operator">=</span><span class="token string">"appname"</span>\n  credentials<span class="token operator">=</span><span class="token string">"abcdef123:abcdef12-ab12-ab12-ab12-abcdef123456"</span>\n<span class="gatsby-highlight-code-line">  theme<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    typography<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      fontFamily<span class="token punctuation">:</span> <span class="token string">\'Raleway, Helvetica, sans-serif\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    colors<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      primaryColor<span class="token punctuation">:</span> <span class="token string">\'#008000\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">      titleColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">    component<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      padding<span class="token punctuation">:</span> <span class="token number">10</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component1</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component2</span> <span class="token attr-name">..</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Check out the stories for <code>themePreset</code> set to <code>dark</code> on <a href="https://opensource.appbase.io/playground/?knob-themePreset=dark&selectedKind=theme&selectedStory=Dark%20Preset%20with%20ResultList&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs" target="_blank">playground</a>.</p>',frontmatter:{title:"Themes",next:"theming/style.html",prev:"result-components/reactivelist.html",nextTitle:"Style",prevTitle:"Result Components: ReactiveList"},fields:{path:"docs/theming/themes.md",slug:"theming/themes.html"}}},pathContext:{slug:"theming/themes.html"}}}});
//# sourceMappingURL=path---theming-themes-html-aee3be6359025694c499.js.map