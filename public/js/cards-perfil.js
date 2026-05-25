// ── PERFIL (1:1) ─────────────────────────────────────────────
// Chamar carregarPerfil() dentro da função iniciarDashboard() que já existe

function carregarPerfil() {
    var idUsuario = sessionStorage.ID_USUARIO;

    fetch("/perfis/buscar/" + idUsuario)
        .then(function (res) {
            if (res.status === 204) {
                // Usuário ainda não tem perfil — cria um vazio
                criarPerfilVazio(idUsuario);
                return;
            }
            return res.json();
        })
        .then(function (perfil) {
            if (!perfil) return;
            document.getElementById("infoBio").innerHTML = perfil.bio || "Sem bio cadastrada.";
            var dataNasc = perfil.data_nascimento ? new Date(perfil.data_nascimento).toLocaleDateString("pt-BR") : "--";
            document.getElementById("infoNascimento").innerHTML = dataNasc;
        })
        .catch(function (erro) {
            console.log("Erro ao carregar perfil: ", erro);
        });
}

function criarPerfilVazio(idUsuario) {
    fetch("/perfis/cadastrar/" + idUsuario, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bioServer: "", dataNascimentoServer: "2000-01-01" })
    }).catch(function (erro) {
        console.log("Erro ao criar perfil vazio: ", erro);
    });
}

function abrirEdicaoPerfil() {
    document.getElementById("modalPerfil").style.display = "flex";
}

function fecharEdicaoPerfil() {
    document.getElementById("modalPerfil").style.display = "none";
}

function salvarPerfil() {
    var idUsuario = sessionStorage.ID_USUARIO;
    var bio = document.getElementById("input_bio").value;
    var dataNascimento = document.getElementById("input_nascimento").value;

    if (dataNascimento === "") {
        alert("Preencha a data de nascimento!");
        return;
    }

    fetch("/perfis/editar/" + idUsuario, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            bioServer: bio,
            dataNascimentoServer: dataNascimento
        })
    })
    .then(function (resposta) {
        if (resposta.ok) {
            alert("Perfil atualizado com sucesso!");
            fecharEdicaoPerfil();
            carregarPerfil();
        } else {
            alert("Erro ao atualizar o perfil!");
        }
    })
    .catch(function (erro) {
        console.log("Erro ao salvar perfil: ", erro);
    });
}
