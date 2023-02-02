/* 

Create the database, with (DBname, version) parameters then,
    database,
    transaction,
    storage,
    index number;
*/

let request = indexedDB.open("Clients", 1),
    db, // open a database
    tx, // transaction
    store, // store defines the structure for the data
    index; // allows for searchable information

// define the store event handler and opening a database with a new version
request.onupgradeneeded = function(e) {
    let db = request.result,
        store = db.createObjectStore("ClientsStore", {
            autoIncrement: true}),
        index = store.createIndex("ClientName", "ClientName", {unique: false});
}

// define the error event handler
request.onerror = function(e) {
    console.log("There was an error: " + e.target.errorCode);
}


// define the on success event handler allows data to be added and retrieved
request.onsucccess = function(e) {
    let db = request.result;
    let tx = db.transaction("ClientsStore", "readwrite");
    let store = tx.objectStore("ClientsStore");
    let index = store.index("ClientName");
    
    db.onerror = function(e) {
        console.log("Error" + e.target.errorCode);
    }
    
    store.put({ClientName: "Rock Connection",
               address: "24 Casebridge",
               dateOfInv: "pick up from date input field",
               InvAmt: "pick up from total amount input field"});
    
    store.put({ClientName: "Other random",
               address: "9 Main Street",
               dateOfInv: "pick up from date input field",
               InvAmt: "pick up from total amount input field"});
    
    let client1 = index.get("Rock Connection");
    
    client1.onsucccess = function() {
        console.log(client1.result.ClientName);
    }
    
    // Close the database event handler
    tx.oncomplete = function() {
        db.close();
    }
}






















