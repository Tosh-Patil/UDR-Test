PGDMP  (                    |            UDP-Concept    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    UDP-Concept    DATABASE     �   CREATE DATABASE "UDP-Concept" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "UDP-Concept";
                postgres    false            �            1259    16412 
   categories    TABLE     x   CREATE TABLE public.categories (
    "ID" integer NOT NULL,
    "Name" character varying(20),
    "Description" text
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    16407    products    TABLE     o   CREATE TABLE public.products (
    "Name" character varying,
    "Description" text,
    "Category" integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �          0    16412 
   categories 
   TABLE DATA           A   COPY public.categories ("ID", "Name", "Description") FROM stdin;
    public          postgres    false    216   �
       �          0    16407    products 
   TABLE DATA           E   COPY public.products ("Name", "Description", "Category") FROM stdin;
    public          postgres    false    215   �
                  2606    16418    categories categories_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY ("ID");
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    216                       1259    16424    fki_category_id    INDEX     J   CREATE INDEX fki_category_id ON public.products USING btree ("Category");
 #   DROP INDEX public.fki_category_id;
       public            postgres    false    215                        2606    16419    products category_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT category_id FOREIGN KEY ("Category") REFERENCES public.categories("ID") NOT VALID;
 >   ALTER TABLE ONLY public.products DROP CONSTRAINT category_id;
       public          postgres    false    215    216    4639            �      x������ � �      �      x������ � �     