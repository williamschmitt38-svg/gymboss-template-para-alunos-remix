import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

import { resetarSenhaAdmin } from "@/lib/master-academy.functions";
import { sendPasswordResetEmail } from "@/lib/email-client";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { MoreHorizontal, KeyRound, Eye, Pause, Copy, AlertTriangle } from "lucide-react";
import { fmtBRL } from "@/lib/format";
import { format } from "date-fns";
import { toast } from "sonner";

export const Route = createFileRoute("/master/listaAcademias")({ component: Lista });

function Lista() {
  const { data: rows, refetch } = useQuery({
    queryKey: ["master-academies"],
    queryFn: async () => {
      const { data } = await supabase.from("academy").select("*").order("created_at", { ascending: false });
      return data ?? [];
    },
  });
  const resetFn = resetarSenhaAdmin;
  const [confirm, setConfirm] = useState<{ id: string; name: string } | null>(null);
  const [result, setResult] = useState<{ email: string; senha: string; nome_admin: string; academia: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const suspend = async (id: string) => {
    const { error } = await supabase.from("academy").update({ status: "blocked" }).eq("id", id);
    if (error) toast.error(error.message); else { toast.success("Academia suspensa"); refetch(); }
  };

  return (
    <div>
      <PageHeader
        title="Academias"
        description="Todas as academias cadastradas."
        actions={<Link to="/master/novaAcademia"><Button>Nova academia</Button></Link>}
      />
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Plano</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Mensal</TableHead>
                <TableHead>Trial até</TableHead>
                <TableHead>Criada em</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(rows ?? []).map((a: any) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.name}</TableCell>
                  <TableCell><Badge variant="outline">{a.plano}</Badge></TableCell>
                  <TableCell>
                    <Badge variant={a.status === "active" ? "default" : a.status === "trial" ? "secondary" : "destructive"}>{a.status}</Badge>
                  </TableCell>
                  <TableCell>{fmtBRL(Number(a.valor_mensal ?? 0))}</TableCell>
                  <TableCell>{a.trial_ate ? format(new Date(a.trial_ate), "dd/MM/yyyy") : "—"}</TableCell>
                  <TableCell>{format(new Date(a.created_at), "dd/MM/yyyy")}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={()=>{sessionStorage.setItem('gymboss-academy',a.id);window.location.assign('/app/dashboard')}}>Abrir academia</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>{navigator.clipboard.writeText(`${window.location.origin}/entrar\nEntre com ${a.owner_email}.`);toast.success('Instruções copiadas')}}>Copiar acesso</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive" onClick={() => suspend(a.id)}>
                          <Pause className="h-4 w-4 mr-2" />Suspender academia
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {(rows ?? []).length === 0 && (
                <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground py-12">Nenhuma academia.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

    </div>
  );
}
