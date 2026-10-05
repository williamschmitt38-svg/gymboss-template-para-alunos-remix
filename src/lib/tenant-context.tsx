import {callBackend} from '@/blink/backend';
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./auth-context";

export type AppRole = "super_admin" | "admin" | "professor" | "recepcao" | "personal" | "demo";

export type TenantInfo = {
  role: AppRole | null;
  academyId: string | null;
  academy: {
    id: string;
    name: string;
    cor_primaria: string | null;
    status: string;
    trial_ate: string | null;
    plano: string;
    valor_mensal: number | null;
  } | null;
  isSuperAdmin: boolean;
};

export function useTenant() {
  const { user, loading } = useAuth();


  const q = useQuery({
    queryKey: ["tenant-info", user?.id],
    enabled: !!user,
    queryFn: async (): Promise<TenantInfo> => {
      return (await callBackend('/api/bootstrap')).tenant;
    },
  });

  return {
    tenant: q.data,
    loading: loading || q.isLoading,
    refetch: q.refetch,
  };
}
