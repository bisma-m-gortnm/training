var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MODERATOR"] = 1] = "MODERATOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
//  console.warn(Role)
if (!Role) {
    console.log("admin", Role.ADMIN);
}
else {
    console.log("no enum found");
}
