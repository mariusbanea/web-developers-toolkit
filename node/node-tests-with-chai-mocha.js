describe(`Lunch is ready!`, () => {



    before(() => {
        console.log('setup the table')
    })




    beforeEach(() => {
        console.log('bring the plates and cutlery for each course')
    })



    //----------
    it(`eat the entree`, () => {
        console.log('eating the entree')
    })

    //----------
    it(`eat the main course`, () => {
        console.log('eating the main course')
    })

    //----------
    it(`eat the dessert`, () => {
        console.log('eating the dessert')
    })



    afterEach(() => {
        console.log('put away the plates and cutlery after each course')
    })






    after(() => {
        console.log('clean up the table and wash the dishes')
    })
})


////// the order of execution ////////

// Describe (ex: Lunch is ready!)
// before (ex: setup the table)

//----------
// beforeEach (ex: bring the plates and cutlery for the entree)
// it #1 (ex: eat the entree)
// afterEach (ex: put away the plates and cutlery after the entree)

//----------
// beforeEach (ex: bring the plates and cutlery for the main course)
// it #2 (ex: eat the main course)
// afterEach (ex: put away the plates and cutlery after the main course)

//----------
// beforeEach (ex: bring the plates and cutlery for the dessert)
// it #3 (ex: eat the dessert)
// afterEach (ex: put away the plates and cutlery after the dessert)

// after (ex: clean up the table and wash the dishes)
