CREATE TABLE IF NOT EXISTS "academy" (
 "business_hours" TEXT DEFAULT '{}',
 "capacity_per_class" REAL DEFAULT 0,
 "cnpj" TEXT,
 "cor_primaria" TEXT,
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "email" TEXT,
 "endereco" TEXT DEFAULT '{}',
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "logo_url" TEXT,
 "name" TEXT NOT NULL,
 "owner_email" TEXT,
 "owner_nome" TEXT,
 "owner_telefone" TEXT,
 "plano" TEXT NOT NULL DEFAULT 'starter',
 "slug" TEXT UNIQUE,
 "status" TEXT NOT NULL DEFAULT 'trial',
 "telefone" TEXT,
 "trial_ate" TEXT,
 "ultimo_acesso" TEXT,
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "valor_mensal" REAL DEFAULT 0 CHECK("valor_mensal" IS NULL OR "valor_mensal">=0)
);
CREATE TABLE IF NOT EXISTS "academy_user" (
 "academy_id" TEXT NOT NULL REFERENCES academy(id),
 "ativo" BOOLEAN NOT NULL DEFAULT 1,
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "email" TEXT NOT NULL,
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "must_change_password" BOOLEAN NOT NULL DEFAULT '0',
 "nome" TEXT,
 "role" TEXT NOT NULL DEFAULT 'recepcao',
 "ultimo_login" TEXT,
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_academy_user_academy_id ON academy_user(academy_id);
CREATE TABLE IF NOT EXISTS "app_config" (
 "app_name" TEXT DEFAULT 'GymBoss AI',
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "super_admin_emails" TEXT NOT NULL DEFAULT '[]',
 "system_settings" TEXT DEFAULT '{}',
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE TABLE IF NOT EXISTS "checkin" (
 "academy_id" TEXT NOT NULL REFERENCES academy(id),
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "date" TEXT NOT NULL,
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "modality" TEXT,
 "schedule_id" TEXT REFERENCES schedule(id),
 "source" TEXT NOT NULL DEFAULT 'manual',
 "student_id" TEXT NOT NULL REFERENCES student(id),
 "student_name" TEXT,
 "time" TEXT NOT NULL,
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_checkin_academy_id ON checkin(academy_id);
CREATE INDEX IF NOT EXISTS idx_checkin_student_id ON checkin(student_id);
CREATE INDEX IF NOT EXISTS idx_checkin_date ON checkin(date);
CREATE TABLE IF NOT EXISTS "financial" (
 "academy_id" TEXT NOT NULL REFERENCES academy(id),
 "amount" REAL NOT NULL CHECK("amount" IS NULL OR "amount">=0),
 "category" TEXT,
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "date" TEXT NOT NULL,
 "description" TEXT,
 "due_date" TEXT,
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "payment_method" TEXT,
 "status" TEXT NOT NULL DEFAULT 'pendente',
 "student_id" TEXT REFERENCES student(id),
 "student_name" TEXT,
 "type" TEXT NOT NULL DEFAULT 'receita',
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_financial_academy_id ON financial(academy_id);
CREATE INDEX IF NOT EXISTS idx_financial_student_id ON financial(student_id);
CREATE INDEX IF NOT EXISTS idx_financial_date ON financial(date);
CREATE TABLE IF NOT EXISTS "lead" (
 "academy_id" TEXT NOT NULL REFERENCES academy(id),
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "email" TEXT,
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "modality" TEXT,
 "name" TEXT NOT NULL,
 "objetivo" TEXT,
 "phone" TEXT NOT NULL,
 "plan_id" TEXT REFERENCES plan(id),
 "schedule_id" TEXT REFERENCES schedule(id),
 "status" TEXT NOT NULL DEFAULT 'novo',
 "type" TEXT NOT NULL,
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_lead_academy_id ON lead(academy_id);
CREATE TABLE IF NOT EXISTS "plan" (
 "academy_id" TEXT NOT NULL REFERENCES academy(id),
 "active" BOOLEAN NOT NULL DEFAULT 1,
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "description" TEXT,
 "duration_months" REAL NOT NULL DEFAULT '1',
 "featured" BOOLEAN NOT NULL DEFAULT '0',
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "included_classes" TEXT DEFAULT '[]',
 "name" TEXT NOT NULL,
 "price" REAL NOT NULL CHECK("price" IS NULL OR "price">=0),
 "total_checkins" REAL DEFAULT 0,
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_plan_academy_id ON plan(academy_id);
CREATE TABLE IF NOT EXISTS "schedule" (
 "academy_id" TEXT NOT NULL REFERENCES academy(id),
 "active" BOOLEAN NOT NULL DEFAULT 1,
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "day_of_week" REAL NOT NULL,
 "end_time" TEXT NOT NULL,
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "instructor_id" TEXT,
 "instructor_name" TEXT,
 "max_capacity" REAL NOT NULL DEFAULT '20',
 "modality" TEXT,
 "name" TEXT NOT NULL,
 "start_time" TEXT NOT NULL,
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_schedule_academy_id ON schedule(academy_id);
CREATE TABLE IF NOT EXISTS "student" (
 "academy_id" TEXT NOT NULL REFERENCES academy(id),
 "address" TEXT,
 "ativo" BOOLEAN NOT NULL DEFAULT 1,
 "birth_date" TEXT,
 "cpf" TEXT,
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "email" TEXT,
 "emergency_contact" TEXT,
 "gender" TEXT,
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "medical_notes" TEXT,
 "name" TEXT NOT NULL,
 "payment_status" TEXT NOT NULL DEFAULT 'em_dia',
 "phone" TEXT,
 "photo_url" TEXT,
 "plan_end" TEXT,
 "plan_id" TEXT REFERENCES plan(id),
 "plan_name" TEXT,
 "plan_start" TEXT,
 "status" TEXT NOT NULL DEFAULT 'active',
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_student_academy_id ON student(academy_id);
CREATE TABLE IF NOT EXISTS "team_member" (
 "academy_id" TEXT NOT NULL REFERENCES academy(id),
 "active" BOOLEAN NOT NULL DEFAULT 1,
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "email" TEXT NOT NULL,
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "name" TEXT NOT NULL,
 "role" TEXT NOT NULL DEFAULT 'professor',
 "updated_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);
CREATE INDEX IF NOT EXISTS idx_team_member_academy_id ON team_member(academy_id);
CREATE TABLE IF NOT EXISTS "user_roles" (
 "academy_id" TEXT REFERENCES academy(id),
 "created_at" TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 "id" TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
 "role" TEXT NOT NULL,
 "user_id" TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_user_roles_academy_id ON user_roles(academy_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON user_roles(user_id);
CREATE TABLE IF NOT EXISTS profiles(user_id TEXT PRIMARY KEY,email TEXT);
CREATE TABLE IF NOT EXISTS template_owner(id TEXT PRIMARY KEY,user_id TEXT NOT NULL);
CREATE UNIQUE INDEX IF NOT EXISTS user_role_unique ON user_roles(user_id,role,coalesce(academy_id,''));
CREATE UNIQUE INDEX IF NOT EXISTS academy_user_email ON academy_user(academy_id,lower(email));
CREATE UNIQUE INDEX IF NOT EXISTS team_member_email ON team_member(academy_id,lower(email));
CREATE UNIQUE INDEX IF NOT EXISTS checkin_student_day ON checkin(academy_id,student_id,date);
