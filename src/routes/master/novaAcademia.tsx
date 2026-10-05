import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";

import { createAcademiaWithOwner } from "@/lib/master-academy.functions";
import { sendWelcomeEmail } from "@/lib/email-client";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Building2, MapPin, Phone, User, CreditCard, KeyRound, Copy, MessageCircle, AlertTriangle, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/master/novaAcademia")({ component: Nova });

type Credentials = {
  academy_id: string;
  email_admin: string;

  slug_publico: string;
  link_publico_completo: string;
};

const initial = {
  nome: "", slug: "", cor_principal: "#F97316",
  telefone: "", whatsapp: "", email: "", cnpj: "",
  endereco: { cep: "", rua: "", numero: "", bairro: "", cidade: "", uf: "" },
  capacidade_max: 200, mensalidade_basica: 89,
  plano: "pro" as "starter" | "pro" | "premium",
  valor_mensal: 197, dia_vencimento: 10,
  email_admin: "", nome_admin: "",
};

function Nova() {
  const navigate = useNavigate();
  const create = createAcademiaWithOwner;
  const [f, setF] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [creds, setCreds] = useState<Credentials | null>(null);

  const update = <K extends keyof typeof f>(k: K, v: (typeof f)[K]) => setF((p) => ({ ...p, [k]: v }));
  const updateEndereco = <K extends keyof typeof f.endereco>(k: K, v: string) =>
    setF((p) => ({ ...p, endereco: { ...p.endereco, [k]: v } }));

  const slugify = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const result = await create({ data: f });
      setCreds(result);

    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <PageHeader title="Nova academia" description="Cadastro completo + criacao do admin de acesso." />
      <form onSubmit={submit} className="space-y-6 max-w-4xl">
        <Section icon={<Building2 className="h-4 w-4" />} title="Dados da academia">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nome*"><Input required value={f.nome} onChange={(e)=>{ update("nome", e.target.value); if(!f.slug) update("slug", slugify(e.target.value)); }} /></Field>
            <Field label="Slug publico*" hint="usado em /agendar/...">
              <Input required value={f.slug} onChange={(e)=>update("slug", slugify(e.target.value))} placeholder="forca-total" />
            </Field>
            <Field label="CNPJ"><Input value={f.cnpj} onChange={(e)=>update("cnpj", e.target.value)} /></Field>
            <Field label="Cor principal">
              <div className="flex gap-2 items-center">
                <Input type="color" className="w-16 h-10 p-1" value={f.cor_principal} onChange={(e)=>update("cor_principal", e.target.value)} />
                <Input value={f.cor_principal} onChange={(e)=>update("cor_principal", e.target.value)} />
              </div>
            </Field>
            <Field label="Capacidade max"><Input type="number" value={f.capacidade_max} onChange={(e)=>update("capacidade_max", Number(e.target.value))} /></Field>
            <Field label="Mensalidade basica (R$)"><Input type="number" value={f.mensalidade_basica} onChange={(e)=>update("mensalidade_basica", Number(e.target.value))} /></Field>
          </div>
        </Section>

        <Section icon={<MapPin className="h-4 w-4" />} title="Endereco">
          <div className="grid sm:grid-cols-6 gap-4">
            <Field label="CEP" className="sm:col-span-2"><Input value={f.endereco.cep} onChange={(e)=>updateEndereco("cep", e.target.value)} /></Field>
            <Field label="Rua" className="sm:col-span-3"><Input value={f.endereco.rua} onChange={(e)=>updateEndereco("rua", e.target.value)} /></Field>
            <Field label="Numero"><Input value={f.endereco.numero} onChange={(e)=>updateEndereco("numero", e.target.value)} /></Field>
            <Field label="Bairro" className="sm:col-span-2"><Input value={f.endereco.bairro} onChange={(e)=>updateEndereco("bairro", e.target.value)} /></Field>
            <Field label="Cidade" className="sm:col-span-3"><Input value={f.endereco.cidade} onChange={(e)=>updateEndereco("cidade", e.target.value)} /></Field>
            <Field label="UF"><Input maxLength={2} value={f.endereco.uf} onChange={(e)=>updateEndereco("uf", e.target.value.toUpperCase())} /></Field>
          </div>
        </Section>

        <Section icon={<Phone className="h-4 w-4" />} title="Contato">
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Telefone"><Input value={f.telefone} onChange={(e)=>update("telefone", e.target.value)} /></Field>
            <Field label="WhatsApp"><Input value={f.whatsapp} onChange={(e)=>update("whatsapp", e.target.value)} /></Field>
            <Field label="Email"><Input type="email" value={f.email} onChange={(e)=>update("email", e.target.value)} /></Field>
          </div>
        </Section>

        <Section icon={<CreditCard className="h-4 w-4" />} title="Plano e cobranca">
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Plano">
              <Select value={f.plano} onValueChange={(v: "starter"|"pro"|"premium")=>update("plano", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="starter">Starter</SelectItem>
                  <SelectItem value="pro">Professional</SelectItem>
                  <SelectItem value="premium">Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Valor mensal (R$)"><Input type="number" value={f.valor_mensal} onChange={(e)=>update("valor_mensal", Number(e.target.value))} /></Field>
            <Field label="Dia de vencimento"><Input type="number" min={1} max={28} value={f.dia_vencimento} onChange={(e)=>update("dia_vencimento", Number(e.target.value))} /></Field>
          </div>
        </Section>

        <Section icon={<User className="h-4 w-4" />} title="Admin de acesso">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nome do admin*"><Input required value={f.nome_admin} onChange={(e)=>update("nome_admin", e.target.value)} /></Field>
            <Field label="Email do admin*" hint="O titular entra com este email e confirma o acesso">
              <Input required type="email" value={f.email_admin} onChange={(e)=>update("email_admin", e.target.value)} />
            </Field>
          </div>
        </Section>

        <div className="flex gap-3">
          <Button type="submit" disabled={busy} size="lg" className="bg-orange-500 hover:bg-orange-600">
            {busy ? "Criando…" : "Criar academia + admin"}
          </Button>
          <Button type="button" variant="outline" onClick={()=>navigate({ to: "/master/listaAcademias" })}>Cancelar</Button>
        </div>
      </form>

      <CredentialsModal
        creds={creds}
        nome_admin={f.nome_admin}
        nome_academia={f.nome}
        whatsapp={f.whatsapp || f.telefone}
        onClose={() => { setCreds(null); navigate({ to: "/master/listaAcademias" }); }}
      />
    </div>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">{icon}{title}</div>
        {children}
      </CardContent>
    </Card>
  );
}
function Field({ label, hint, children, className }: { label: string; hint?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label className="text-xs">{label}</Label>
      {children}
      {hint && <div className="text-[11px] text-muted-foreground mt-1">{hint}</div>}
    </div>
  );
}

export function CredentialsModal({creds,nome_admin,onClose}:any){if(!creds)return null;const access=window.location.origin+'/entrar';return <Dialog open onOpenChange={onClose}><DialogContent><DialogHeader><DialogTitle>Academia cadastrada</DialogTitle></DialogHeader><p>Compartilhe o acesso com {nome_admin}. O administrador deve entrar com <b>{creds.email_admin}</b> e verificar o email.</p><p>Nenhum email ou WhatsApp foi enviado automaticamente.</p><code>{access}</code><Button onClick={()=>{navigator.clipboard.writeText(`Acesso: ${access}\nEntre com ${creds.email_admin}.\nLink público: ${window.location.origin}${creds.link_publico_completo}`);toast.success('Instruções copiadas')}}>Copiar instruções</Button><Button onClick={onClose}>Concluir</Button></DialogContent></Dialog>}
