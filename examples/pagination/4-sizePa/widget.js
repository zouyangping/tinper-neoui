var paginationLg = document.getElementById("paginationLg");
var comp = new u.pagination({el:paginationLg,jumppage:true});
comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200,showState:false});
var paginationDefault = document.getElementById("paginationDefault");
var comp = new u.pagination({el:paginationDefault,jumppage:true});
comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200,showState:false});
var paginationSm = document.getElementById("paginationSm");
var comp = new u.pagination({el:paginationSm,jumppage:true});
comp.update({totalPages: 100,pageSize:20,currentPage:1,totalCount:200,showState:false});