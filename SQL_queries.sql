--Monday questions
--Query 1: last name('Wahlberg')--
select last_name, count(last_name)
from actor 
where last_name = 'Wahlberg'
group by last_name;

--Query 2: payments between $3.99 and $5.99 --
select amount, count(amount)
from payment
where amount in (3.99, 4.99, 5.99)
group by amount
order by count(amount) desc;

--Query 3: films--
select store_id,
count(film_id) as film_count
from inventory
group by store_id
order by count(film_id) desc;
 
--Query 4: how many 'William...' s among customers--
select last_name, count(last_name)
from customer
where last_name like 'William%'
group by last_name;

--Query 5: most rentals--
select staff_id, 
count(rental_id) as rental_count
from  rental
group by staff_id
order by rental_count desc;

--Query 6: counting district names--
select count(distinct district)
from address;

--Query 7:  actors in the film--
select film_id, 
count(actor_id) actors
from film_actor
group by film_id
order by count(actor_id) desc 
limit 5;


--Query 8: customers with last name ...es%--
select store_id, last_name, 
count (last_name)
from customer
where  store_id = 1 and last_name like '%es'
group by store_id, last_name
order by last_name asc;

--Query 9: customer rentals--
select customer_id, 
count(rental_id) as total_rental
from rental
where customer_id between 380 and 430
group by customer_id 
having count(rental_id) > 250
order by customer_id asc;

--Query 10: movies and ratings--
select rating,
count(title) as movie_count
from film
group by rating
order by count(title) desc;

--Wednesday questions--
--Query 1: customers from Texas--
select address.district, first_name, last_name
from customer 
inner join address 
on customer.address_id = address.address_id 
where district = 'Texas'
order by last_name asc;

--Query 2: payments over $6.99--
select first_name, last_name, 
sum(amount) as total_amount
from customer
inner join payment 
on payment.customer_id = customer.customer_id 
where amount > 6.99
group by first_name, last_name
order by total_amount  desc;

--Query 3: payments over $175 (using subq)--
select last_name , first_name
from customer 
where exists 
(select * from payment 
where payment.customer_id = customer.customer_id
and amount > 175)
order by last_name asc;

--Query 4: customers from Nepal--
select last_name, first_name
from customer 
inner join address 
on customer.address_id = address.address_id
inner join city 
on address.city_id = city.city_id
inner join country 
on city.country_id = country.country_id 
where country.country = 'Nepal';

--Query 5: transaction amount--
 select first_name, last_name, sum(amount)
 from staff
 inner join payment
 on staff.staff_id = payment.staff_id
 group by first_name, last_name
 order by sum(amount) desc;

--Query 6: ratings of movies--
select rating, count(title)
from film 
group by rating 
order by count(title) desc;

--Query 7: customers, who have made a single payment--
select last_name, first_name, 
count(amount) as payment_count
from customer
inner join payment 
on customer.customer_id = payment.customer_id 
where amount > 6.99
group by last_name, first_name 
having count(amount) = 1
order by last_name asc;

--Query 8: counting free rentals--
select count(amount)
from payment 
inner join rental 
on payment.rental_id = rental.rental_id 
where amount = 0;























