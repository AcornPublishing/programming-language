-- (part of) Ada code for Figure 9.3 (Example 9.21)

package body gp_list.int_list is

    procedure initialize (self : access int_list_node) is
    begin
        initialize (gp_list_node_ptr (self));
        self.val := 0;
    end initialize;

end gp_list.int_list;
