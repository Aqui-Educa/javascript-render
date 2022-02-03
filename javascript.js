

createForm({
    title: 'Cadastro de clientes',
    fields: [
        {
            label: 'Nome',
            type: 'text',
            id: 'nome',
        },
        {
            label: 'Telefone',
            type: 'text',
            id: 'telefone',
        }
    ],
    buttons: [
        {
            type: 'Save',
            label: 'Salvar',
            click: 'abrirAlerta()'
        },
        {
            type: 'Back',
            label: 'Voltar',
            click: ''
        }
    ]
})

function createForm(form = {}){

    render('h1', {}, form.title)
    render('br', {  }, null)

    form.fields.map(f => {
        createField(f)
    })

    form.buttons.map(b => {
        if (b.click) {
            console.log('oi')
            render('button', { onClick: b.click }, b.label)
        }            
        else
            render('button', {  }, b.label)
    })

}

function abrirAlerta() {
    alert("Olá!")
}


function createField(field = {}){
    render('label', {}, field.label)
    render('br', {  }, null)
    render('input', { id: field.id, type: field.type }, null)
    render('br', {  }, null)
    render('br', {  }, null)
}

function render(tagName, attributes = {}, text) {    
    const elemento = document.createElement(tagName);
    Object.assign(elemento, attributes);
    if (text) { 
        elemento.appendChild(document.createTextNode(text)); 
    }
    document.getElementById("render").appendChild(elemento)
}