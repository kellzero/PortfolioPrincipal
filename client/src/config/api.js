// src/config/api.js
const isProduction = import.meta.env.PROD;

export const API_BASE_URL = isProduction
  ? "https://seuservidor.com/api" // URL da sua API em produção
  : "/api"; // Usa o proxy em desenvolvimento

// Exemplo de uso:
// fetch(`${API_BASE_URL}/users`)
