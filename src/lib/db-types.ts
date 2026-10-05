// Auto-generated from your database schema — do not edit by hand.
// Regenerates automatically whenever a table is created or altered.

export type AcademyRow = {
  businessHours: string | null
  capacityPerClass: number | string | null
  cnpj: string | null
  corPrimaria: string | null
  createdAt: string
  email: string | null
  endereco: string | null
  id: string
  logoUrl: string | null
  name: string
  ownerEmail: string | null
  ownerNome: string | null
  ownerTelefone: string | null
  plano: string
  slug: string | null
  status: string
  telefone: string | null
  trialAte: string | null
  ultimoAcesso: string | null
  updatedAt: string
  valorMensal: number | string | null
}

export type AcademyUserRow = {
  academyId: string
  ativo: boolean
  createdAt: string
  email: string
  id: string
  mustChangePassword: boolean
  nome: string | null
  role: string
  ultimoLogin: string | null
  updatedAt: string
}

export type AppConfigRow = {
  appName: string | null
  createdAt: string
  id: string
  superAdminEmails: string
  systemSettings: string | null
  updatedAt: string
}

export type CheckinRow = {
  academyId: string
  createdAt: string
  date: string
  id: string
  modality: string | null
  scheduleId: string | null
  source: string
  studentId: string
  studentName: string | null
  time: string
  updatedAt: string
}

export type FinancialRow = {
  academyId: string
  amount: number | string
  category: string | null
  createdAt: string
  date: string
  description: string | null
  dueDate: string | null
  id: string
  paymentMethod: string | null
  status: string
  studentId: string | null
  studentName: string | null
  type: string
  updatedAt: string
}

export type LeadRow = {
  academyId: string
  createdAt: string
  email: string | null
  id: string
  modality: string | null
  name: string
  objetivo: string | null
  phone: string
  planId: string | null
  scheduleId: string | null
  status: string
  type: string
  updatedAt: string
}

export type PlanRow = {
  academyId: string
  active: boolean
  createdAt: string
  description: string | null
  durationMonths: number | string
  featured: boolean
  id: string
  includedClasses: string | null
  name: string
  price: number | string
  totalCheckins: number | string | null
  updatedAt: string
}

export type ProfilesRow = {
  userId: string
  email: string | null
}

export type ScheduleRow = {
  academyId: string
  active: boolean
  createdAt: string
  dayOfWeek: number | string
  endTime: string
  id: string
  instructorId: string | null
  instructorName: string | null
  maxCapacity: number | string
  modality: string | null
  name: string
  startTime: string
  updatedAt: string
}

export type StudentRow = {
  academyId: string
  address: string | null
  ativo: boolean
  birthDate: string | null
  cpf: string | null
  createdAt: string
  email: string | null
  emergencyContact: string | null
  gender: string | null
  id: string
  medicalNotes: string | null
  name: string
  paymentStatus: string
  phone: string | null
  photoUrl: string | null
  planEnd: string | null
  planId: string | null
  planName: string | null
  planStart: string | null
  status: string
  updatedAt: string
}

export type TeamMemberRow = {
  academyId: string
  active: boolean
  createdAt: string
  email: string
  id: string
  name: string
  role: string
  updatedAt: string
}

export type TemplateOwnerRow = {
  id: string
  userId: string
}

export type UserRolesRow = {
  academyId: string | null
  createdAt: string
  id: string
  role: string
  userId: string
}
