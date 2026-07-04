let sname, h, e, m, total, avg, sstatus, grade, color;
sname = prompt('Enter the name ');

h = parseInt(prompt('Enter the Marks '));
e = parseInt(prompt('Enter the Marks '));
m = parseInt(prompt('Enter the Marks '));

total = h + e + m;
avg = total / 3;
if (avg >= 1 && avg <= 100) {
    sstatus = (avg >= 60) ? "Pass" : "Fail";
    grade = (avg >= 90) ? "A" : (avg >= 80) ? "B" : (avg >= 70) ? "C" : (avg >= 60) ? "D" : "Better Luck Next Time!!";

    color = (avg >= 90) ? "green" : (avg >= 80) ? "blue" : (avg >= 70) ? "orange" : (avg >= 60) ? "yellowgreen" : "red";

    document.write(`
    <table width="100%" border="1" cellpadding="20">
        <thead>
            <tr>
                <th> Name </th>
                <th> Hindi </th>
                <th> English </th>
                <th> Math </th>
                <th> Total </th>
                <th> Average </th>
                <th> Status </th>
                <th> Grade </th>
                
            </tr>
        </thead>
        <tbody>
            <tr style="color:${color}">
                <td> ${sname} </td>
                <td> ${h} </td>
                <td> ${e} </td>
                <td> ${m} </td>
                <td> ${total} </td>
                <td> ${avg} </td>
                <td> ${sstatus} </td>
                <td> ${grade} </td>
            </tr>
        </tbody>
    </table>
    `)

}
else{
    document.write("<h1> Invalid Numbers </h1> ")
}