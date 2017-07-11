describe('Simple Website App', function() {
	it('should have a title', function() {
		browser.driver.get('http://localhost:5000/');
		expect(browser.driver.getTitle()).toEqual('This is my first website');
		});
});
