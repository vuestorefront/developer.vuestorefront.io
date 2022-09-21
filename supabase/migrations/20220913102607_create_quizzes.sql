create table "public"."quiz_responses" (
    "id" uuid not null default uuid_generate_v4(),
    "user_id" uuid,
    "quiz_id" character varying not null,
    "discord_user_id" character varying,
    "score" smallint not null,
    "passed" boolean not null,
    "answers" json not null,
    "user_details" json not null,
    "submitter_cookie" character varying not null,
    "created_at" timestamp with time zone not null default now()
);


alter table "public"."quiz_responses" enable row level security;

create table "public"."quizzes" (
    "id" character varying not null,
    "title" character varying not null,
    "questions" json not null,
    "correct_answers" json not null,
    "discord_role_id" character varying not null,
    "passing_score" smallint not null
);


alter table "public"."quizzes" enable row level security;

CREATE UNIQUE INDEX quiz_pkey ON public.quizzes USING btree (id);

CREATE UNIQUE INDEX quiz_responses_pkey ON public.quiz_responses USING btree (id);

alter table "public"."quiz_responses" add constraint "quiz_responses_pkey" PRIMARY KEY using index "quiz_responses_pkey";

alter table "public"."quizzes" add constraint "quiz_pkey" PRIMARY KEY using index "quiz_pkey";

alter table "public"."quiz_responses" add constraint "quiz_responses_quiz_id_fkey" FOREIGN KEY (quiz_id) REFERENCES quizzes(id) not valid;

alter table "public"."quiz_responses" validate constraint "quiz_responses_quiz_id_fkey";

alter table "public"."quiz_responses" add constraint "quiz_responses_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) not valid;

alter table "public"."quiz_responses" validate constraint "quiz_responses_user_id_fkey";

create policy "Allow ALL access to ""service_role"""
on "public"."quiz_responses"
as permissive
for all
to service_role
using (true);


create policy "Allow ALL access to ""service_role"""
on "public"."quizzes"
as permissive
for all
to service_role
using (true);



