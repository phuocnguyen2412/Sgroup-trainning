export default function getData() {
    fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users")
        .then((response) => {
            if (!response.status) return error;
            return response.json();
        })
        .then((response) => {
            console.log(response);
            showData(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

function showData(data) {
    const html = data.map(
        (item) => ` 
            <tr>
                <td>${item.id}</td>
                <td>${item.email}</td>
                <td>${item.password}</td>
                <td>
                    <i class="fa-regular fa-pen-to-square text-center" value=${item.id}>
                    </i>
                </td>
                <td><i class="fa-solid fa-trash text-center" value=${item.id}></i></td>
            </tr>
        `
    );

    document.querySelector(".accounts").innerHTML = `
        <table class="table table-hover">
            <thead class="table-light">
                <tr>
                    <th>id</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                ${html.join("")}
            </tbody>
        </table>
    `;
}
