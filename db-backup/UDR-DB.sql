PGDMP  2    !                |            UDP-Concept    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    UDP-Concept    DATABASE     �   CREATE DATABASE "UDP-Concept" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "UDP-Concept";
                postgres    false            �            1259    16399 	   Furniture    TABLE     �   CREATE TABLE public."Furniture" (
    "FurnitureID" integer NOT NULL,
    "FurnitureName" character varying NOT NULL,
    "Quantity" integer DEFAULT 0 NOT NULL
);
    DROP TABLE public."Furniture";
       public         heap    postgres    false            �          0    16399 	   Furniture 
   TABLE DATA           Q   COPY public."Furniture" ("FurnitureID", "FurnitureName", "Quantity") FROM stdin;
    public          postgres    false    215   �                  2606    16406    Furniture Furniture_pkey 
   CONSTRAINT     e   ALTER TABLE ONLY public."Furniture"
    ADD CONSTRAINT "Furniture_pkey" PRIMARY KEY ("FurnitureID");
 F   ALTER TABLE ONLY public."Furniture" DROP CONSTRAINT "Furniture_pkey";
       public            postgres    false    215            �      x������ � �     