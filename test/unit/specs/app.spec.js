describe('app', function() {
	it('returns 42', function() {
			assert.equal(theAnswer(), 42);
		});

	it('returns a list of length of 4', function(){
		assert.equal(myList().length, 4);
	});
});
