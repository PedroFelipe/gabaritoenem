$('.day').button('toggle');
$('.color').button('toggle');

var t_gabaritos =
	{
		"1":
		{
			/* rosa */
			"0":
			[
				["C"], ["B"], ["A"], ["C"], ["E"], ["B"], ["A"], ["B"], ["B"], ["D"], ["A"], ["B"], ["B"], ["B"], ["B"],
				["C"], ["C"], ["D"], ["E"], ["A"], ["E"], ["A"], ["A"], ["C"], ["C"], ["A"], ["B"], ["C"], ["D"], ["D"],
				["C"], ["C"], ["B"], ["C"], ["A"], ["E"], ["E"], ["B"], ["E"], ["D"], ["B"], ["C"], ["C"], ["A"], ["C"],
				["D"], ["B"], ["A"], ["B"], ["C"], ["E"], ["C"], ["D"], ["B"], ["D"], ["B"], ["A"], ["A"], ["A"], ["A"],
				["B"], ["E"], ["B"], ["D"], ["E"], ["A"], ["B"], ["C"], ["B"], ["B"], ["E"], ["D"], ["A"], ["A"], ["C"],
				["B"], ["A"], ["B"], ["E"], ["C"], ["D"], ["B"], ["C"], ["B"], ["C"], ["A"], ["A"], ["E"], ["D"], ["B"]
			],

			/* azul */
			"1":
			[	
				["E"], ["A"], ["E"], ["B"], ["A"], ["B"], ["B"], ["B"], ["B"], ["C"], ["C"], ["D"], ["E"], ["A"], ["B"],
				["E"], ["D"], ["B"], ["B"], ["C"], ["D"], ["D"], ["B"], ["D"], ["A"], ["B"], ["C"], ["A"], ["E"], ["E"],
				["C"], ["C"], ["B"], ["C"], ["B"], ["A"], ["C"], ["C"], ["C"], ["A"], ["C"], ["A"], ["C"], ["C"], ["A"],
				["B"], ["B"], ["E"], ["D"], ["A"], ["B"], ["E"], ["B"], ["D"], ["A"], ["B"], ["A"], ["A"], ["A"], ["B"],
				["C"], ["B"], ["C"], ["B"], ["C"], ["A"], ["C"], ["B"], ["E"], ["C"], ["D"], ["E"], ["A"], ["C"], ["E"],
				["C"], ["D"], ["B"], ["D"], ["B"], ["A"], ["A"], ["D"], ["B"], ["A"], ["E"], ["B"], ["D"], ["B"], ["A"]
			],

			/* amarela */
			"2":
			[				
				["B"], ["E"], ["D"], ["B"], ["C"], ["C"], ["B"], ["E"], ["A"], ["A"], ["C"], ["C"], ["A"], ["C"], ["D"],
				["E"], ["A"], ["B"], ["B"], ["B"], ["C"], ["B"], ["C"], ["D"], ["D"], ["B"], ["D"], ["A"], ["B"], ["C"],
				["A"], ["E"], ["E"], ["C"], ["C"], ["A"], ["C"], ["E"], ["B"], ["A"], ["B"], ["C"], ["B"], ["A"], ["C"],
				["A"], ["B"], ["A"], ["A"], ["B"], ["C"], ["B"], ["C"], ["B"], ["E"], ["B"], ["D"], ["B"], ["B"], ["E"],
				["D"], ["A"], ["A"], ["B"], ["C"], ["E"], ["A"], ["E"], ["A"], ["C"], ["B"], ["E"], ["C"], ["D"], ["D"],
				["B"], ["A"], ["A"], ["B"], ["C"], ["E"], ["C"], ["D"], ["D"], ["B"], ["B"], ["D"], ["B"], ["A"], ["A"]
			],

			/* branca */
			"3":
			[
				["C"], ["D"], ["E"], ["A"], ["B"], ["C"], ["D"], ["D"], ["B"], ["B"], ["B"], ["C"], ["B"], ["D"], ["A"],
				["B"], ["C"], ["A"], ["E"], ["E"], ["B"], ["E"], ["D"], ["B"], ["C"], ["C"], ["B"], ["E"], ["B"], ["A"],
				["B"], ["E"], ["A"], ["C"], ["B"], ["A"], ["C"], ["A"], ["C"], ["C"], ["A"], ["C"], ["C"], ["A"], ["C"],
				["B"], ["E"], ["B"], ["D"], ["A"], ["B"], ["C"], ["B"], ["B"], ["A"], ["C"], ["B"], ["E"], ["D"], ["A"],
				["A"], ["B"], ["E"], ["C"], ["D"], ["A"], ["A"], ["E"], ["B"], ["C"], ["B"], ["C"], ["D"], ["B"], ["A"],
				["A"], ["B"], ["C"], ["E"], ["C"], ["D"], ["A"], ["E"], ["B"], ["D"], ["B"], ["A"], ["A"], ["D"], ["B"]
			]
		},
		
		"2":
		{
			/* rosa - inglês */
			"0_0":
			[
				["C"], ["C"], ["B"], ["C"], ["A"], ["A"], ["E"], ["A"], ["C"], ["C"], ["C"], ["E"], ["E"], ["C"], ["E"], 
				["D"], ["D"], ["A"], ["B"], ["D"], ["D"], ["B"], ["D"], ["E"], ["A"], ["C"], ["E"], ["B"], ["C"], ["B"], 
				["C"], ["A"], ["A"], ["D"], ["B"], ["E"], ["E"], ["D"], ["E"], ["B"], ["B"], ["E"], ["C"], ["D"], ["A"], 
				["C"], ["D"], ["D"], ["A"], ["D"], ["C"], ["B"], ["E"], ["D"], ["C"], ["C"], ["A"], ["A"], ["B"], ["D"], 
				["C"], ["E"], ["D"], ["C"], ["D"], ["E"], ["E"], ["E"], ["D"], ["B"], ["E"], ["B"], ["A"], ["C"], ["C"], 
				["A"], ["A"], ["B"], ["B"], ["E"], ["B"], ["E"], ["C"], ["B"], ["A"], ["C"], ["B"], ["D"], ["A"], ["D"]
			],

			/* azul - inglês */
			"1_0":
			[	
				["A"], ["B"], ["C"], ["C"], ["C"], ["A"], ["D"], ["D"], ["B"], ["D"], ["E"], ["C"], ["E"], ["D"], ["B"],
				["E"], ["E"], ["A"], ["C"], ["E"], ["B"], ["C"], ["B"], ["C"], ["A"], ["A"], ["D"], ["D"], ["A"], ["B"],
				["E"], ["D"], ["E"], ["C"], ["C"], ["E"], ["C"], ["D"], ["A"], ["E"], ["A"], ["C"], ["B"], ["B"], ["E"],
				["E"], ["B"], ["A"], ["C"], ["D"], ["C"], ["D"], ["E"], ["C"], ["A"], ["A"], ["C"], ["D"], ["D"], ["A"],
				["E"], ["E"], ["D"], ["B"], ["C"], ["A"], ["A"], ["B"], ["B"], ["B"], ["D"], ["C"], ["E"], ["E"], ["B"],
				["E"], ["C"], ["B"], ["A"], ["C"], ["B"], ["D"], ["A"], ["D"], ["E"], ["D"], ["C"], ["D"], ["C"], ["B"]
			],

			/* amarela - inglês */
			"2_0":
			[				
				["C"], ["C"], ["A"], ["B"], ["C"], ["A"], ["C"], ["A"], ["A"], ["E"], ["A"], ["C"], ["D"], ["D"], ["B"],
				["D"], ["E"], ["B"], ["C"], ["B"], ["C"], ["C"], ["E"], ["E"], ["C"], ["E"], ["D"], ["D"], ["A"], ["B"],
				["E"], ["D"], ["E"], ["E"], ["A"], ["C"], ["C"], ["D"], ["A"], ["B"], ["E"], ["E"], ["D"], ["B"], ["E"],
				["E"], ["D"], ["B"], ["C"], ["A"], ["A"], ["E"], ["C"], ["A"], ["A"], ["B"], ["B"], ["B"], ["D"], ["C"],
				["E"], ["C"], ["D"], ["D"], ["A"], ["E"], ["B"], ["A"], ["C"], ["E"], ["B"], ["E"], ["C"], ["B"], ["D"],
				["A"], ["D"], ["E"], ["D"], ["C"], ["D"], ["C"], ["B"], ["C"], ["B"], ["A"], ["D"], ["C"], ["D"], ["E"]
			],

			/* cinza - inglês */
			"3_0":
			[
				["A"], ["B"], ["C"], ["C"], ["C"], ["A"], ["E"], ["A"], ["C"], ["E"], ["B"], ["C"], ["B"], ["D"], ["D"], 
				["A"], ["B"], ["D"], ["D"], ["B"], ["D"], ["C"], ["A"], ["A"], ["E"], ["D"], ["E"], ["C"], ["D"], ["A"], 
				["B"], ["B"], ["E"], ["C"], ["C"], ["E"], ["E"], ["A"], ["C"], ["D"], ["B"], ["E"], ["E"], ["C"], ["E"], 
				["C"], ["A"], ["A"], ["C"], ["D"], ["D"], ["A"], ["E"], ["E"], ["B"], ["A"], ["C"], ["E"], ["D"], ["B"], 
				["C"], ["A"], ["A"], ["B"], ["B"], ["E"], ["B"], ["E"], ["D"], ["C"], ["B"], ["B"], ["D"], ["C"], ["E"], 
				["C"], ["B"], ["D"], ["A"], ["D"], ["C"], ["B"], ["A"], ["D"], ["C"], ["D"], ["E"], ["E"], ["D"], ["C"]
			],
			
			/* rosa - espanhol */
			"0_1":
			[
				["B"], ["E"], ["A"], ["C"], ["C"], ["A"], ["E"], ["A"], ["C"], ["C"], ["C"], ["E"], ["E"], ["C"], ["E"], 
				["D"], ["D"], ["A"], ["B"], ["D"], ["D"], ["B"], ["D"], ["E"], ["A"], ["C"], ["E"], ["B"], ["C"], ["B"], 
				["C"], ["A"], ["A"], ["D"], ["B"], ["E"], ["E"], ["D"], ["E"], ["B"], ["B"], ["E"], ["C"], ["D"], ["A"], 
				["C"], ["D"], ["D"], ["A"], ["D"], ["C"], ["B"], ["E"], ["D"], ["C"], ["C"], ["A"], ["A"], ["B"], ["D"], 
				["C"], ["E"], ["D"], ["C"], ["D"], ["E"], ["E"], ["E"], ["D"], ["B"], ["E"], ["B"], ["A"], ["C"], ["C"], 
				["A"], ["A"], ["B"], ["B"], ["E"], ["B"], ["E"], ["C"], ["B"], ["A"], ["C"], ["B"], ["D"], ["A"], ["D"]
			],

			/* azul - espanhol */
			"1_1":
			[
				["C"], ["C"], ["A"], ["E"], ["B"], ["A"], ["D"], ["D"], ["B"], ["D"], ["E"], ["C"], ["E"], ["D"], ["B"],
				["E"], ["E"], ["A"], ["C"], ["E"], ["B"], ["C"], ["B"], ["C"], ["A"], ["A"], ["D"], ["D"], ["A"], ["B"],
				["E"], ["D"], ["E"], ["C"], ["C"], ["E"], ["C"], ["D"], ["A"], ["E"], ["A"], ["C"], ["B"], ["B"], ["E"],
				["E"], ["B"], ["A"], ["C"], ["D"], ["C"], ["D"], ["E"], ["C"], ["A"], ["A"], ["C"], ["D"], ["D"], ["A"],
				["E"], ["E"], ["D"], ["B"], ["C"], ["A"], ["A"], ["B"], ["B"], ["B"], ["D"], ["C"], ["E"], ["E"], ["B"],
				["E"], ["C"], ["B"], ["A"], ["C"], ["B"], ["D"], ["A"], ["D"], ["E"], ["D"], ["C"], ["D"], ["C"], ["B"]
			],

			/* amarela - espanhol */
			"2_1":
			[
				["E"], ["A"], ["B"], ["C"], ["C"], ["A"], ["C"], ["A"], ["A"], ["E"], ["A"], ["C"], ["D"], ["D"], ["B"],
				["D"], ["E"], ["B"], ["C"], ["B"], ["C"], ["C"], ["E"], ["E"], ["C"], ["E"], ["D"], ["D"], ["A"], ["B"],
				["E"], ["D"], ["E"], ["E"], ["A"], ["C"], ["C"], ["D"], ["A"], ["B"], ["E"], ["E"], ["D"], ["B"], ["E"],
				["E"], ["D"], ["B"], ["C"], ["A"], ["A"], ["E"], ["C"], ["A"], ["A"], ["B"], ["B"], ["B"], ["D"], ["C"],
				["E"], ["C"], ["D"], ["D"], ["A"], ["E"], ["B"], ["A"], ["C"], ["E"], ["B"], ["E"], ["C"], ["B"], ["D"],
				["A"], ["D"], ["E"], ["D"], ["C"], ["D"], ["C"], ["B"], ["C"], ["B"], ["A"], ["D"], ["C"], ["D"], ["E"]
			],

			/* cinza - espanhol */
			"3_1":
			[
				["C"], ["E"], ["A"], ["C"], ["B"], ["A"], ["E"], ["A"], ["C"], ["E"], ["B"], ["C"], ["B"], ["D"], ["D"], 
				["A"], ["B"], ["D"], ["D"], ["B"], ["D"], ["C"], ["A"], ["A"], ["E"], ["D"], ["E"], ["C"], ["D"], ["A"], 
				["B"], ["B"], ["E"], ["C"], ["C"], ["E"], ["E"], ["A"], ["C"], ["D"], ["B"], ["E"], ["E"], ["C"], ["E"], 
				["C"], ["A"], ["A"], ["C"], ["D"], ["D"], ["A"], ["E"], ["E"], ["B"], ["A"], ["C"], ["E"], ["D"], ["B"], 
				["C"], ["A"], ["A"], ["B"], ["B"], ["E"], ["B"], ["E"], ["D"], ["C"], ["B"], ["B"], ["D"], ["C"], ["E"], 
				["C"], ["B"], ["D"], ["A"], ["D"], ["C"], ["B"], ["A"], ["D"], ["C"], ["D"], ["E"], ["E"], ["D"], ["C"]
			]
		}
	};

var s_dia = "1";
var s_cor = 0;
var s_respostas = [];
var s_nrespostas = 0;
var t_language = "0";

$(document).ready(function()
{
	$("button").click(function()
	{
		if($(this).attr("data-option") == "day")
		{
			$("[data-option=\"day\"]").each(function(i, w)
			{
				$(w).removeClass("active");
			});
			//setDay($(this).attr("data-value"));
			s_dia = $(this).attr("data-value");

			s_respostas = [];
			s_nrespostas = 0;
			
			$("button", $("[data-option=\"gabarito\"]")).each(function(i, w)
			{
				$(w).removeClass("btn-success");
				$(w).removeClass("btn-danger");
				$(w).removeClass("active");
			});
			
			updAcertos();
			
			if(s_dia == "2")
			{
				$("#lang").removeClass("hide");
				$("#color_3").html("Cinza");
			}
			else
			{
				$("#lang").addClass("hide");
				$("#color_3").html("Branca");
			}
			
			$("td.line", $("[data-option=\"gabarito\"]")).each(function(i, w)
			{
				var oldNum = parseInt(w.innerHTML);
				var baseQuestionNumber = oldNum;
				if(baseQuestionNumber > 90)
				    baseQuestionNumber -= 90;
					
				if(s_dia == "1")
					$(w).html(baseQuestionNumber.toString());
				else
					$(w).html((baseQuestionNumber + 90).toString());
			});
		}
		else if($(this).attr("data-option") == "color")
		{
			$("[data-option=\"color\"]").each(function(i, w)
			{
				$(w).removeClass("active");
			});
			//setColor($(this).attr("data-value"));
			s_cor = parseInt($(this).attr("data-value"));

			s_respostas = [];
			s_nrespostas = 0;
			
			$("button", $("[data-option=\"gabarito\"]")).each(function(i, w)
			{
				$(w).removeClass("btn-success");
				$(w).removeClass("btn-danger");
				$(w).removeClass("active");
			});
			
			updAcertos();

		}
		else if($(this.parentNode.parentNode.parentNode.parentNode.parentNode).attr("data-option") == "gabarito")
		{
			$("button", this.parentNode).each(function(i, w)
			{
				$(w).removeClass("btn-success");
				$(w).removeClass("btn-danger");
				$(w).removeClass("active");
			});
			var q_num = parseInt(this.parentNode.parentNode.previousElementSibling.innerHTML);
			if(s_dia == "2")
				q_num = q_num - 90;
			
			var corAdd = "";
			if(s_dia == "2")
				corAdd = "_" + t_language;
				
			var q_res = t_gabaritos[s_dia.toString()][s_cor.toString() + corAdd][q_num - 1];
			if(q_res.length < 1)
			{
				return;
			}
			
			$(this).addClass("btn-danger");
			for(var i = 0; i < q_res.length; i++)
			{
				if(q_res[i] == this.innerHTML)
				{
					$(this).removeClass("btn-danger");
					$(this).addClass("btn-success");
					break;
				}
			}
			
			if(!s_respostas[q_num.toString()])
				s_nrespostas++;
				
			s_respostas[q_num.toString()] = this.innerHTML;
			updAcertos();
		}
		else if($(this).attr("data-option") == "lang")
		{
			$("[data-option=\"lang\"]").each(function(i, w)
			{
				$(w).removeClass("active");
			});
			
			t_language = $(this).attr("data-value");
			$("button", $("[data-option=\"gabarito\"]")).each(function(i, w)
			{
				var q_num = parseInt(w.parentNode.parentNode.previousElementSibling.innerHTML);
				
				if(q_num <= 95)
				{
					$(w).removeClass("btn-success");
					$(w).removeClass("btn-danger");
					$(w).removeClass("active");
				}
			});
			
			for(var  i = 0; i < 5; i++)
			{
				if(s_respostas[i.toString()] != undefined)
				{
					s_respostas[i.toString()] = undefined;
					s_nrespostas--;
				}
			}
			
			updAcertos();
		}
	});
});

updAcertos = function()
{
	var acertos = 0;
	var erros = 0;
	
	for(var i = 1; i <= 90; i++)
	{
		if(!s_respostas[i.toString()])
			continue;
		
		var q_num = i;
			
		var corAdd = "";
		if(s_dia == "2")
			corAdd = "_" + t_language;
		
		var q_res = t_gabaritos[s_dia.toString()][s_cor.toString() + corAdd][q_num - 1];
		erros++;
		for(var j = 0; j < q_res.length; j++)
		{
			if(q_res[j] == s_respostas[i.toString()])
			{
				erros--;
				acertos++;
				break;
			}
		}	
	}
	
	$("#acertos").html(acertos.toString());
	$("#erros").html(erros.toString());
	$("#media").html(((acertos * 10) / 9).toString().substring(0, 4));
}