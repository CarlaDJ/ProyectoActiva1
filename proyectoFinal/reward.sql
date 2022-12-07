<<<<<<< HEAD
use proyectoFinal;

select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname 
from reward as r inner join student as s on r.id_user_rewarded = s.id 
where r.id_user_rewarded = 2;

select * from reward;
=======
use proyecto_final;

select * from reward;

select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname 
from reward as r inner join student as s on r.id_user_rewarded = s.id 
where r.id_user_rewarded = 2
>>>>>>> cec4f5d16908dc058ce930b051b9c635435fdb5b
