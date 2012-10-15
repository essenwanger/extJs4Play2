# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table tb_usuario (
  usu_id                    bigint not null,
  usu_usu                   varchar(255),
  usu_pas                   varchar(255),
  usu_nom                   varchar(255),
  constraint pk_tb_usuario primary key (usu_id))
;

create sequence usuario_seq;




# --- !Downs

drop table if exists tb_usuario cascade;

drop sequence if exists usuario_seq;

