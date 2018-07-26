<h1 id="ngforvalidationsnote">NgForValidationsNote</h1>
<h2 id="requirements">Requirements</h2>
<p>Angular 6 or higher.</p>
<h2 id="installing">Installing</h2>
<pre><code>$ npm i ng-for-validations-note --save
</code></pre>
<h2 id="usage">Usage</h2>
<p>Include the module into <code>imports</code> metadata key of <code>NgModule</code> decorator of your application.</p>
<pre class=" language-typescript"><code class="prism  language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> NgForValidationsNote <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ng-for-validations-note'</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    imports<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        NgForValidationsNote<span class="token punctuation">.</span>Module
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre>
<p>Choose which component you want to use</p>
<blockquote>
<ul>
<li>app-form-validation;</li>
<li>app-form-uniq-validation;</li>
<li>app-form-validation-list.</li>
</ul>
</blockquote>
<p>To use anyone you must tdefine the <code>messages</code> property binding like that</p>
<pre class=" language-html"><code class="prism  language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-form-validation</span>
  <span class="token attr-name">[messages]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{
    required: <span class="token punctuation">'</span>this field is required.<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-form-validation</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>To use <code>app-form-uniq-validation</code> or <code>app-form-validation-list</code> you must define the <code>nameTranslations</code> property binding.</p>
<pre class=" language-html"><code class="prism  language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-form-uniq-validation</span>
  <span class="token attr-name">[nameTranslations]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{
    name: <span class="token punctuation">'</span>Name<span class="token punctuation">'</span>,
	name2: <span class="token punctuation">'</span>Name 2<span class="token punctuation">'</span>
  }<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-form-uniq-validation</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>To use <code>app-form-validation</code> you must define the <code>control</code> property binding.</p>
<pre class=" language-html"><code class="prism  language-html">&lt;form
  <span class="token comment">&lt;!-- on Reactive Forms --&gt;</span>
  [formGroup]="form"
  <span class="token comment">&lt;!-- on Template Driven --&gt;</span>
  #form="ngForm"
&gt;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>aName<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app-form-validation</span>
  <span class="token attr-name">[control]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.controls[<span class="token punctuation">'</span>aName<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>app-form-uniq-validation</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>So inject the service on your component and call the <code>notifier</code> method when you want to show the validation message in your application. If you want to use <code>app-form-uniq-validation</code> or <code>app-form-validation-list</code>, you must pass <code>NgForm</code> of <code>FormGroup</code> object as argument to use it.</p>

