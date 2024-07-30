
function add() {
    const t1 = document.getElementById("type").value;
    const t2 = document.getElementById("name").value;
    const t3 = document.getElementById("amount").value;
    const t4 = document.getElementById("transBody");
    const row = document.createElement('tr');

        row.innerHTML = `
            <td>${t1}</td>
            <td>${t2}</td>
            <td>${t3}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
    
        t4.appendChild(row);
    
        row.querySelector('.delete-btn').addEventListener('click', function() {
            row.remove();
        });

    }
