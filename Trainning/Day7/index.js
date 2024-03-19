const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

function getData() {
    fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch data");
            return response.json();
        })
        .then((response) => {
            showData(response);
            $$(".fa-trash").forEach((item) =>
                item.addEventListener("click", () =>
                    deleteData(item.getAttribute("value"))
                )
            );
            $$(".btn_openModel_edit").forEach((item) =>
                item.addEventListener("click", () =>
                    openModel(item.getAttribute("value"))
                )
            );
        })
        .catch((error) => {
            console.error(error);
        });
}
function openModel(id) {
    fetch(`https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/${id}`)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch data");
            return response.json();
        })
        .then((response) => {
            $(".emailEdit").value = response.email;
            $(".passwordEdit").value = response.password;
            $(".idEdit").value = response.id;
        })
        .catch((error) => {
            console.error(error);
        });
}
getData();

function updateData() {
    fetch(
        `https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/${
            $(".idEdit").value
        }`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: $(".idEdit").value,
                email: $(".emailEdit").value,
                password: $(".passwordEdit").value,
            }),
        }
    )
        .then((response) => {
            if (!response.ok) throw new Error("Failed to update data");
            alert("Updated data");
            console.log("Data updated successfully");
            getData();
        })
        .catch((error) => {
            console.error(error);
        });
}
function postData() {
    if ($(".passwordNew").value !== $(".confirmPasswordNew").value) {
        $(".confirm_password-notify").innerText =
            "Mật khẩu nhập lại không đúng";
        return;
    } else {
        $(".confirm_password-notify").innerText = "";
    }
    fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: $(".emailNew").value,
            password: $(".passwordNew").value,
        }),
    })
        .then((response) => {
            if (!response.ok) throw new Error("Failed to post data");
            alert("Post thanh cong!");
            console.log("Data posted successfully");
            getData();
        })
        .catch((error) => {
            console.error(error);
        });
}
function deleteData(id) {
    fetch(`https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) throw new Error("Failed to delete data");
            console.log("Data deleted successfully");
            getData();
            alert("Delete data successfully");
        })
        .catch((error) => {
            console.error(error);
        });
}
function handleFindUserById() {
    const id = $(".idUser").value;
    $(".idUser").value = 0;
    fetch(`https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/${id}`)
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch data");
            return response.json();
        })
        .then((response) => {
            showData([response]);
            $$(".fa-trash").forEach((item) =>
                item.addEventListener("click", () =>
                    deleteData(item.getAttribute("value"))
                )
            );
            $$(".btn_openModel_edit").forEach((item) =>
                item.addEventListener("click", () =>
                    openModel(item.getAttribute("value"))
                )
            );
        })
        .catch((error) => {
            console.error(error);
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
                    <button class="btn btn_openModel_edit" data-bs-toggle="modal" data-bs-target="#exampleModal" value=${item.id}>  
                        <i class="fa-regular fa-pen-to-square text-center text-primary"  >
                        </i>
                    </button>
                </td>
                <td>
                    <button class="btn">
                    
                        <i class="fa-solid fa-trash text-center text-danger" value=${item.id}></i>
                    </button>
                </td>
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
