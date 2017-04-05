$(function(){
	$('#tomobile').click(function(){
		
		$('table tr').hide();
		$('table').each(function(){
			var this_ = $(this);
			var head = this_.find('tr').eq(0);
			this_.find('tr').each(function(e){
				var this_tr = $(this);
				if(e != 0){
					this_tr.find('td').each(function(r){
						$tr = '<tr>'+
							'<td class="head">'+
								head.find('td').eq(r).html()+
							'</td>'+
							'<td>'+
								$(this).html()+
							'</td>'+
						'</tr>';
						this_.append($tr);
					});
				}
			});
		});
		
		$(this).remove();
	})
})