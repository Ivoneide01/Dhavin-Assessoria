// Importar as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1t75NnHe81F1cUX1Rr7C5op-vt5XpQeA",
  authDomain: "dhavin-76ecc.firebaseapp.com",
  databaseURL: "https://dhavin-76ecc-default-rtdb.firebaseio.com",
  projectId: "dhavin-76ecc",
  storageBucket: "dhavin-76ecc.appspot.com",
  messagingSenderId: "251036624256",
  appId: "1:251036624256:web:0c6a94fcb417d43f780d65",
  measurementId: "G-YDR30YT21Y"
};

// Inicializar o aplicativo Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obter referência ao banco de dados
const db = getDatabase(app);

// Função para enviar dados do formulário para o Firebase
export function enviarDadosFormulario(nome, email) {
  const contatosRef = ref(db, 'contatos'); // Referência à coleção 'contatos'
  return push(contatosRef, {
    nome: nome,
    email: email
  });
}