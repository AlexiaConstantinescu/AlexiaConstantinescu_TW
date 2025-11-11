const apiUrl = 'http://localhost:8000/api/';

async function get(url) {
    return (await axios.get(url)).data;
}

async function post(url, body) {
    return (await axios.post(url, JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })).data;
}

async function loadTable() {
    let data = await get(apiUrl + "getList");
    let tableDiv = document.getElementById('tableData');
    if (!data || !tableDiv) return;

    let myTable = document.getElementById('myTable');
    if (myTable) myTable.remove();

    let myHtmlCode = [];
    myHtmlCode.push("<table id='myTable'>");
    myHtmlCode.push('<thead>');
    myHtmlCode.push('<tr> <th hidden>Id</th> <th>Name</th> <th>Age</th> </tr>');
    myHtmlCode.push('</thead>');
    myHtmlCode.push('<tbody>');

    for (let item of data)
        myHtmlCode.push(`<tr> <td hidden>${item.id}</td> <td>${item.name}</td> <td>${item.age}</td> </tr>`);

    myHtmlCode.push('</tbody>');
    myHtmlCode.push('</table>');

    tableDiv.innerHTML = myHtmlCode.join("");
}

async function sendData() {
    let name = document.getElementById('inputName').value;
    let age = document.getElementById('inputAge').value;

    if (!name || !age) {
        alert('You must enter a name and age');
        return;
    }

    await post(apiUrl + "postList", { name: name, age: age });
    await loadTable();
}

async function getById() {
    let id = document.getElementById('inputId').value;
    if (!id) {
        alert('Enter an ID');
        return;
    }

    try {
        let data = await get(apiUrl + "getItem/" + id);
        document.getElementById('resultById').innerHTML = `<p>ID: ${data.id}, Name: ${data.name}, Age: ${data.age}</p>`;
    } catch (err) {
        document.getElementById('resultById').innerHTML = `<p>Resursa nu a fost găsită</p>`;
    }
}

loadTable();
