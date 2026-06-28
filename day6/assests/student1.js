let sname,e,h,m,s,c,  total, avg, sstatus;
sname=prompt("Enter the name :");
e=parseInt(prompt('Enter English Marks'))
h=parseInt(prompt('Enter Hindi Marks'))
m=parseInt(prompt('Enter Maths Marks'))
s=parseInt(prompt('Enter Science Marks'))
c=parseInt(prompt('Enter Computer Marks'))

total=e+h+m+s+c;
avg=total / 5;
sstatus = (avg >= 60) ? "Pass" : "Fail";

document.write(`<table border="1" width="100%">
    <thead>
        <tr>
            <th>Name</th>
            <th>English</th>
            <th>Hindi</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Computer</th>
            <th>Total</th>
            <th>Average</th>
            <th>Status</th>
        </tr>
    </thead>  
    <tbody>
        <tr>
            <td> ${sname} </td>
            <td> ${e} </td>
            <td> ${h} </td>
            <td> ${m} </td>
            <td> ${s} </td>
            <td> ${c} </td>
            <td> ${total} </td>
            <td> ${avg} </td>
            <td style="color: ${avg >= 60 ? 'green' : 'red'}"> ${sstatus} </td>
        </tr>
    </tbody>
</table>`)