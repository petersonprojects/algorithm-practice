
// Micah Peterson (micahpeterson@live.com)

// documentOn(github.com/petersonprojects)

// solutionBy(petersonprojects.github.io)

module.exports = function sortCategoriesForInsert (inputJson) {

    let properJSONOutput = []

    let IDs = []

    inputJson.forEach(item => {

        let id = item.id
        let parent = item.parent_id

        IDs.push(id)

        if(IDs.includes(parent))
        {
            properJSONOutput.push(item)
        }
        else if(!IDs.includes(parent))
        {
            properJSONOutput.unshift(item)
        }

    })
    
    return properJSONOutput
}
