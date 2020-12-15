
// Micah Peterson (micahpeterson@live.com)

// documentOn(github.com/petersonprojects)

// solutionBy(petersonprojects.github.io)

module.exports = function sortCategoriesForInsert (jsonString) {

    let jsonObj = JSON.parse(jsonString)

    let sortedJSON = []

    let IDs = []

    jsonObj.forEach(item => {

        let id = item.id
        let parent = item.parent_id

        IDs.push(id)

        // if the parent exists, push it to the end
        if(IDs.includes(parent))
        {
            sortedJSON.push(item)
        }

        // if the parent doesnt exist, unshift it to the front of the array
        else
        {
            sortedJSON.unshift(item)
        }

        // note: .includes() and unshift() are both linear
        // which make this function On^2 time complex (linear nested in linear)
        // caching ID's in an obj may be able to make this linear

    })

    let jString = JSON.stringify(sortedJSON)
    
    return jString
}

