export function exibirErro(idElemento: string, mensagem: string) {
  const elemento = document.getElementById(idElemento);

  let errorElement = document.getElementById(idElemento + "Error");
  if (!errorElement) {
    errorElement = document.createElement("p");
    errorElement.classList.add("error");
    errorElement.id = idElemento + "Error";

    elemento!.parentNode!.appendChild(errorElement);
  }

  errorElement.innerText = mensagem;
}

export function ocultarErro(idElemento: string) {
  const elemento = document.getElementById(idElemento);
  elemento!.style.border = "none";

  // Remove a mensagem de erro se existir
  const errorElement = document.getElementById(idElemento + "Error");
  if (errorElement) {
    errorElement.remove();
  }
}

export function validarFormulario() {
  let erros = 0;

  const inputs = document.querySelectorAll(".inputform");

  // Valida os campos obrigatórios
  inputs.forEach((input) => {
    const inputElement = input as HTMLInputElement;
    if (inputElement.value == "" || inputElement.value == null) {
      exibirErro(inputElement.id, "");
      erros++;
    } else {
      ocultarErro(inputElement.id);
    }
  });

  // Validar sections
  const selections = document.querySelectorAll("select");
  selections.forEach((select) => {
    const selectElement = select as HTMLSelectElement;

    if (selectElement.value == "") {
      exibirErro(selectElement.id, "");
      erros++;
    } else {
      ocultarErro(selectElement.id);
    }
  });

  setTimeout(() => {
    inputs.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      ocultarErro(inputElement.id);
    });
  }, 5000);

  if (erros == 0) return true;
  else return false;
}

export function validarFormularioRegister() {
  let erros = 0;

  const inputs = document.querySelectorAll(".inputform");

  // Valida os campos obrigatórios
  inputs.forEach((input) => {
    const inputElement = input as HTMLInputElement;
    if (inputElement.value == "" || inputElement.value == null) {
      exibirErro(inputElement.id, "");
      erros++;
    } else {
      ocultarErro(inputElement.id);
    }
  });

  setTimeout(() => {
    inputs.forEach((input) => {
      const inputElement = input as HTMLInputElement;
      ocultarErro(inputElement.id);
    });
  }, 5000);

  if (erros == 0) return true;
  else return false;
}
