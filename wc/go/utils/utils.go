package utils

// ToPointer takes any value and returns a pointer of said value.
func ToPointer[T any](value T) *T {
	return &value
}

// Check panics if the error is not nil.
func Check(e error) {
	if e != nil {
		panic(e)
	}
}
