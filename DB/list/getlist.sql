select cpuname from cpu where cpu_id = $1 union 
select cpu_cooler_name from cpu_cooler where cpu_cooler_id = $2 union
select mb_name from motherboard where mb_id = $3 union 
select mem_name from memory where mem_id = $4 union
select int_storage_name from internal_storage where int_storage_id = $5 union
select video_card_name from video_card where video_card_id = $6 union 
select case_name from comp_case where case_id = $7 union 
select psu_name from psu where psu_id = $8
