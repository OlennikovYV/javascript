mocha.setup('bdd');

describe('Safen User Input Part I - htmlspecialchars', () => {
  it('Simple tests', () => {
    chai
      .expect(htmlspecialchars('<h2>Hello World</h2>'))
      .to.equal('&lt;h2&gt;Hello World&lt;/h2&gt;');
    chai
      .expect(htmlspecialchars('Hello, how would you & I fare?'))
      .to.equal('Hello, how would you &amp; I fare?');
    chai
      .expect(htmlspecialchars('How was "The Matrix"?  Did you like it?'))
      .to.equal('How was &quot;The Matrix&quot;?  Did you like it?');
    chai
      .expect(htmlspecialchars("<script>alert('Website Hacked!');</script>"))
      .to.equal("&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;");
  });
});

mocha.run();
