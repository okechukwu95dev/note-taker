// this function is called inside savenote() in index.html
// it returns thr largest integer from our notes keys (+ 1)
function noteId (){

    //getting all our existing notes(object) from local storage 
    let allNotes = getAllNotes() 

    //if there are no notes, we automatically set the first key to 1 
    if (!allNotes) 
    {
        return 1; 
        console.log('no notes')
    }

    //Object.keys returns an array of strings from keys in our object 
    let noteKeys = Object.keys(allNotes)

    //we will map this array of strings to a new array of numbers 
    let noteNumbers = noteKeys.map((key) => Number(key)) 

    // we will return the maximum key + 1 so we set a new index
    return Math.max(...noteNumbers) + 1 
}

//this function gets our saved notes from local storage
function getAllNotes(){
    // accessing our saved 'notes' item in local storage
    let myNotes = localStorage.getItem('notes')

    if (!myNotes) 
    {
        return null; 
    }

    //we have to use JSON.parse to sort our STRINGIFIED js 
    //it sets the stringified JSOn object to key/value pairs
    return JSON.parse(myNotes)
}


