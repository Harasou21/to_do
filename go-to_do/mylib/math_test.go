package mylib

import "testing"

func TestAverage(t *testing.T){
	v := Average([]int{1,2,3,4,5,6,7})
	if v != 3{
		t.Error("Expected 3, got", v)
	}
}