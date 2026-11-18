// Envio dos formulários por e-mail, sem banco de dados e sem CRM.
// Padrão: API própria da Tony's (form-api + Resend), no domínio api.tonyspaintingmv.com.
// VITE_FORM_ENDPOINT pode sobrescrever (útil para testar outro serviço no build).
const FORM_ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT || "https://api.tonyspaintingmv.com/lead";

export interface LeadFields {
  name: string;
  phone: string;
  email: string;
  address?: string;
  service?: string;
  message?: string;
  source?: string;
  campaign?: string;
}

export async function submitLead(fields: LeadFields): Promise<void> {
  const payload: Record<string, string> = {
    _subject: "New lead from tonyspaintingmv.com",
    _template: "table",
    _captcha: "false",
    Name: fields.name,
    Phone: fields.phone,
    Email: fields.email,
  };

  if (fields.address) payload.Address = fields.address;
  if (fields.service) payload.Service = fields.service;
  if (fields.message) payload.Message = fields.message;
  if (fields.source) payload.Source = fields.source;
  if (fields.campaign) payload.Campaign = fields.campaign;

  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  // O FormSubmit responde 200 com success:"false" quando o formulário ainda não
  // foi ativado, então checar apenas o status HTTP daria falso positivo.
  const data = await response.json().catch(() => null);
  if (!response.ok || (data && String(data.success) === "false")) {
    throw new Error(data?.message || `Form endpoint returned ${response.status}`);
  }
}
