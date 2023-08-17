<template>
    <div class="notess" >
        <h2>My Saved Notes</h2>
        <div class="save-notes" >
        <a href="" title="" role="button" class="save-buton1"><i class="fa-solid fa-flip-horizontal fa-arrow-down-a-z "></i> Sort by Title</a>
        <a href="" title="" role="button" class="save-buton2"><i class='fas fa-signal fa-rotate-270'></i>Sort by Updated</a>
        <ul class="folder-list">
            <li>
                <a href="" title="" class="folder_ALL">All Notes</a>
            </li>

            <li>
                <a href="" title="" class="folder_DEFAULT">Inbox</a>
            </li>
                      
        </ul>
        <ul class="folder-option">
            <li>
                <a href="" title="" class="folder-manage">Manage Folders</a>
            </li>
        </ul>
            
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.notess{
  display: inline-block;
  height: 34px;
  position: relative;
  left:150px;
  bottom: -70px;
  font-size: 14px;
 
}
.save-notes{
      display: flex;
      padding: 16px; 
      
}

.save-buton1{
  color: #004484;  
}

.save-buton2{
  color: #10589b;  
  padding-left: 10px;
}
.folder-list{
    font-size: 16px;
    list-style: none;
    position: relative;
    right: 250px;
    top: 35px;
    
}

li .folder_ALL,
.folder_DEFAULT{
    font-size: 16px;
    background:url(https://cdn.anotepad.com/Images/folder.svg)no-repeat ;
    background-size: 24px 24px;
    padding: 0 2px 0 32px;
    line-height: 150%;
    vertical-align: middle;
    color: #004484;
}

.folder_DEFAULT{
    font-weight: bold;   
}

.folder-option li{
    
    list-style: none;
    font-size: 16px;
    background: url(https://cdn.anotepad.com/Images/folder_manage.svg?v2) no-repeat;
    background-size: 24px 24px;
    padding: 0 2px 0 32px;
    line-height: 150%;
    position: relative;
    top: 88px;
    right: 348px;
    
}
.folder-manage{
    color: #004484;
}


.folder-manage:hover{   
color: #337ab7;
}

.folder_DEFAULT:hover{
    color: #337ab7;
}
.folder_ALL:hover{
    color: #337ab7;
}
</style>