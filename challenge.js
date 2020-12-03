
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

        if(IDs.includes(parent))
        {
            sortedJSON.push(item)
        }
        else
        {
            sortedJSON.unshift(item)
        }

    })

    let jString = JSON.stringify(sortedJSON)
    
    return jString
}

