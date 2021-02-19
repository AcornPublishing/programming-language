-- (part of) Ada code for Figure 9.3 (Example 9.21)

package gp_list.int_list is

    type int_list_node is new gp_list_node with record
        val : integer;
    end record;
    type int_list_node_ptr is access all int_list_node;

    procedure initialize (self : access int_list_node);

end gp_list.int_list;
